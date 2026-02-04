const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Appointment = require('../models/Appointment');
const { adminAuth } = require('../middleware/auth');
const { sendBookingConfirmation } = require('../services/smsService');

// POST /api/appointments (public)
// Create a new appointment (no auth required)
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('service').notEmpty().withMessage('Service is required'),
    body('price').isNumeric().withMessage('Price is required'),
    body('date').notEmpty().withMessage('Date is required'),
    body('time').notEmpty().withMessage('Time is required'),
    body('paymentMethod').isIn(['UPI', 'Card', 'Cash']).withMessage('Valid payment method required'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      const { name, phone, service, price, date, time, paymentMethod } = req.body;
      const appt = new Appointment({ 
        name, phone, service, price, date, time, 
        paymentMethod, 
        paymentStatus: 'Pending',
        appointmentStatus: 'Pending'
      });
      await appt.save();
      
      // Send SMS notification to customer
      await sendBookingConfirmation(phone, name, service, date, time, price, paymentMethod);
      
      res.status(201).json({ message: 'Appointment created. SMS confirmation sent!', appointment: appt });
    } catch (err) {
      next(err);
    }
  }
);

// GET /api/appointments (admin only)
// Returns all appointments (protected - admin only)
router.get('/', adminAuth, async (req, res, next) => {
  try {
    const appts = await Appointment.find().sort({ createdAt: -1 });
    res.json(appts);
  } catch (err) {
    next(err);
  }
});

// PUT /api/appointments/:id (admin only)
// Update appointment status (Pending/Approved/Completed/Cancelled)
router.put('/:id', adminAuth, async (req, res, next) => {
  try {
    const { appointmentStatus, paymentStatus } = req.body;
    const updateData = {};
    if (appointmentStatus) updateData.appointmentStatus = appointmentStatus;
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    
    const appt = await Appointment.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!appt) return res.status(404).json({ message: 'Appointment not found' });
    res.json(appt);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/appointments/:id (admin only)
// Delete an appointment by id
router.delete('/:id', adminAuth, async (req, res, next) => {
  try {
    const appt = await Appointment.findByIdAndDelete(req.params.id);
    if (!appt) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

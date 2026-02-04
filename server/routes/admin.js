const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendBookingConfirmation } = require('../services/smsService');

// POST /api/admin/login
// Admin login endpoint - returns JWT on successful auth
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) return res.status(400).json({ message: 'Invalid credentials' });
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      const payload = { id: admin._id, email: admin.email };
      // Sign a JWT token (contains admin id and email)
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  }
);

// POST /api/admin/test-sms (for testing)
router.post('/test-sms', async (req, res) => {
  try {
    const { phone, name } = req.body;
    if (!phone || !name) {
      return res.status(400).json({ message: 'Phone and name required' });
    }
    
    // Send test SMS
    await sendBookingConfirmation(phone, name, 'Test Service', '2026-02-10', '14:00', 500, 'UPI');
    res.json({ message: 'Test SMS sent! Check server console for logs.', phone, name });
  } catch (err) {
    res.status(500).json({ message: 'SMS test failed: ' + err.message });
  }
});

module.exports = router;

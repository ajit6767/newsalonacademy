import React, { useState } from 'react'
import api from '../services/api'

const SERVICES = [
  // Makeup
  { name: 'Regular Makeup', price: 500 },
  { name: 'Party Makeup', price: 800 },
  { name: 'Engagement Makeup', price: 1500 },
  { name: 'Bridal Makeup', price: 4999 },
  { name: 'HD Bridal Makeup', price: 5999 },
  { name: 'Reception Makeup', price: 3999 },
  { name: 'Fantasy Makeup', price: 1200 },
  { name: 'Modeling Makeup', price: 999 },
  // Hair
  { name: 'Haircut (Basic to Advance)', price: 299 },
  { name: 'Hair Spa with Treatment', price: 999 },
  { name: 'Blow Dry Hair Styling', price: 599 },
  { name: 'Shampoo Conditioner', price: 399 },
  // Skin
  { name: 'Facial', price: 799 },
  { name: 'Clean-up', price: 599 },
  { name: 'D-tan & Bleach', price: 899 },
  { name: 'Body Polishing', price: 1299 },
  { name: 'Body Spa', price: 2499 },
  { name: 'Waxing & Threading', price: 599 },
  { name: 'Beed Wax', price: 699 },
  { name: 'Meni-pedi', price: 699 },
  // Nails
  { name: 'Cut File', price: 399 },
  { name: 'Gel Polish with Art', price: 899 },
  { name: 'Temporary Extension', price: 1299 },
  { name: 'Acrylic Extension', price: 1599 }
]

const PAYMENT_METHODS = ['UPI', 'Card', 'Cash']

export default function BookingForm(){
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICES[0].name, price: SERVICES[0].price, date: '', time: '', paymentMethod: 'UPI' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleServiceChange = (e) => {
    const selectedService = SERVICES.find(s => s.name === e.target.value)
    setForm({ ...form, service: selectedService.name, price: selectedService.price })
  }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  // Submit booking to backend API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    try {
      const payload = { ...form }
      // POST to /api/appointments
      const res = await api.post('/appointments', payload)
      setMessage({ type: 'success', text: 'Appointment booked successfully! Check your SMS.' })
      setForm({ name: '', phone: '', service: SERVICES[0].name, price: SERVICES[0].price, date: '', time: '', paymentMethod: 'UPI' })
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Failed to create appointment' })
    } finally { setLoading(false) }
  }

  return (
    <div id="book" className="lux-card p-6">
      <h3 className="text-2xl font-semibold mb-4">Book Appointment</h3>
      {message && (
        <div className={`p-3 mb-4 rounded ${message.type==='success' ? 'lux-success' : 'lux-error'}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="lux-input" required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="lux-input" required />
        
        <div>
          <select value={form.service} onChange={handleServiceChange} className="lux-select">
            {SERVICES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
        </div>

        <div className="lux-panel">
          <p className="text-xs uppercase tracking-widest lux-muted">Selected Service</p>
          <p className="text-lg font-semibold">{form.service}</p>
          <p className="text-sm lux-muted">Price: INR {form.price}</p>
        </div>

        <input name="date" type="date" value={form.date} onChange={handleChange} className="lux-input" required />
        <input name="time" type="time" value={form.time} onChange={handleChange} className="lux-input" required />
        
        <div>
          <label className="block text-sm font-semibold mb-1">Payment Method</label>
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className="lux-select">
            {PAYMENT_METHODS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="md:col-span-2">
          <button className="w-full lux-button" disabled={loading}>{loading ? 'Booking...' : 'Submit Booking'}</button>
        </div>
      </form>
    </div>
  )
}

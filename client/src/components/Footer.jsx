import React from 'react'

export default function Footer(){
  return (
    <footer className="lux-footer py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lux-footer-grid">
          <div>
            <h3 className="text-xl font-semibold">The Ramayan Salon and Academy</h3>
            <p className="lux-muted mt-2">Luxury salon services, bridal artistry, and professional beauty education.</p>
            <p className="lux-muted mt-4">Address: Nandanagar New Project Road, Near Shubham Sweet and Restaurant</p>
            <p className="lux-muted">Phone: 8317097467</p>
            <p className="lux-muted">Email: info@ramayansalon.com</p>
          </div>
          <div>
            <h4 className="lux-footer-title">Hours</h4>
            <p className="lux-muted">Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p className="lux-muted">Sunday: 11:00 AM - 6:00 PM</p>
            <p className="lux-muted mt-3">Appointments: Walk-ins and online booking</p>
          </div>
          <div>
            <h4 className="lux-footer-title">Services</h4>
            <p className="lux-muted">Makeup Artistry</p>
            <p className="lux-muted">Hair Styling & Treatments</p>
            <p className="lux-muted">Skin Rituals & Facials</p>
            <p className="lux-muted">Nail Art & Extensions</p>
          </div>
          <div>
            <h4 className="lux-footer-title">Quick Links</h4>
            <div className="lux-footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#book">Book Appointment</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="lux-footer-bottom">
          <p className="lux-muted">Women Salon & Academy</p>
          <p className="lux-muted">Copyright 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

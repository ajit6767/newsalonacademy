import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="lux-nav">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center py-5">
              <img src="/logo.svg" alt="The Ramayaana Salon" className="h-24 w-24" />
              <span className="ml-5 text-3xl font-semibold lux-brand">The Ramayan Salon & Academy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="lux-nav-link">Home</a>
            <a href="#services" className="lux-nav-link">Services</a>
            <a href="#book" className="lux-nav-link">Book</a>
            <a href="#contact" className="lux-nav-link">Contact</a>
            <a href="tel:8317097467" className="lux-button-sm">Call Now</a>
            <Link to="/admin/login" className="lux-nav-link">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

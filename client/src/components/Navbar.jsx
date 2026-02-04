import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center py-3">
              <img src="/logo.svg" alt="The Ramayaana Salon" className="h-16 w-16" />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-red-900 to-pink-600 bg-clip-text text-transparent">The Ramayan Salon & Academy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="py-5 px-3 text-gray-700 hover:text-pink-600">Home</a>
            <a href="#services" className="py-5 px-3 text-gray-700 hover:text-pink-600">Services</a>
            <a href="#gallery" className="py-5 px-3 text-gray-700 hover:text-pink-600">Gallery</a>
            <a href="#book" className="py-5 px-3 text-gray-700 hover:text-pink-600">Book Appointment</a>
            <a href="#contact" className="py-5 px-3 text-gray-700 hover:text-pink-600">Contact</a>
            <a href="tel:8317097467" className="py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700">Call Now</a>
            <Link to="/admin/login" className="py-2 px-4 text-sm text-gray-600 hover:text-pink-600">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

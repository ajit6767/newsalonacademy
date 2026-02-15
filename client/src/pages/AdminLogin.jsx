import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function AdminLogin(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await login(email, password)
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center lux-auth-bg">
      <div className="w-full max-w-md lux-card p-6">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        {error && <div className="p-2 rounded lux-error mb-3">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="lux-input" required />
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="lux-input" required />
          <div className="flex justify-between items-center">
            <button className="lux-button">Login</button>
            <a href="/" className="lux-link text-sm">Back to site</a>
          </div>
        </form>
      </div>
    </div>
  )
}

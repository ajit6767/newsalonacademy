import React, { useEffect, useState, useContext } from 'react'
import api from '../services/api'
import { AuthContext } from '../context/AuthContext'

export default function Dashboard(){
  const [appts, setAppts] = useState([])
  const [loading, setLoading] = useState(true)
  const { logout } = useContext(AuthContext)

  const fetchAppts = async () => {
    setLoading(true)
    try {
      // GET all appointments (admin only)
      const res = await api.get('/appointments')
      setAppts(res.data)
    } catch (err) {
      console.error(err)
    } finally { setLoading(false) }
  }

  useEffect(()=>{ fetchAppts() }, [])

  const updateStatus = async (id, appointmentStatus) => {
    try {
      await api.put(`/appointments/${id}`, { appointmentStatus })
      fetchAppts()
    } catch (err) { console.error(err) }
  }

  const updatePaymentStatus = async (id, paymentStatus) => {
    try {
      await api.put(`/appointments/${id}`, { paymentStatus })
      fetchAppts()
    } catch (err) { console.error(err) }
  }

  const del = async (id) => {
    if (!confirm('Delete appointment?')) return
    try {
      await api.delete(`/appointments/${id}`)
      fetchAppts()
    } catch (err) { console.error(err) }
  }

  return (
    <div className="min-h-screen lux-dashboard-bg">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div>
            <button onClick={logout} className="lux-button-outline">Logout</button>
          </div>
        </div>

        {loading ? <p className="text-center py-10">Loading...</p> : appts.length === 0 ? <p className="text-center py-10">No appointments</p> : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded shadow text-sm">
              <thead>
                <tr className="text-left border-b lux-table-head">
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Service</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Pay Method</th>
                  <th className="p-3">Pay Status</th>
                  <th className="p-3">Appt Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appts.map(a => (
                  <tr key={a._id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{a.name}</td>
                    <td className="p-3">{a.phone}</td>
                    <td className="p-3 text-xs">{a.service}</td>
                    <td className="p-3">{a.date}</td>
                    <td className="p-3">{a.time}</td>
                    <td className="p-3"><span className="text-xs lux-chip-inline">{a.paymentMethod}</span></td>
                    <td className="p-3">
                      <select defaultValue={a.paymentStatus} onChange={(e)=>updatePaymentStatus(a._id, e.target.value)} className="lux-select-sm">
                        <option>Pending</option>
                        <option>Completed</option>
                        <option>Failed</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <select defaultValue={a.appointmentStatus} onChange={(e)=>updateStatus(a._id, e.target.value)} className="lux-select-sm">
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button onClick={()=>del(a._id)} className="lux-button-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import "../Dashboard/dashboard.css"
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
  <>

  <div className="grid grid-cols-4 gap-4 mt-6 dashboard-box">
  <div className="bg-gray-900 text-white p-5 rounded-xl shadow text-center">
    <p className="text-gray-400 text-sm">Total Users</p>
    <h2 className="text-2xl font-bold">30</h2>
  </div>
  <div className="bg-gray-900 text-white p-5 rounded-xl shadow text-center">
    <p className="text-gray-400 text-sm">Products</p>
    <h2 className="text-2xl font-bold">20</h2>
  </div>
  <div className="bg-gray-900 text-white p-5 rounded-xl shadow text-center">
    <p className="text-gray-400 text-sm">Repositories</p>
    <h2 className="text-2xl font-bold">321</h2>
  </div>
  <div className="bg-gray-900 text-white p-5 rounded-xl shadow text-center">
    <p className="text-gray-400 text-sm">Languages Used</p>
    <h2 className="text-2xl font-bold">1</h2>
  </div>
</div>


  
  </>
  )
}

export default Dashboard
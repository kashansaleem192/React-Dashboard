import React from 'react'
import "./SideBar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <nav className="side-bar">
        <ul>
         
        <li className='dashboard' ><Link to="/dashboard" className='no-underline  '><i  className="fa-solid fa-table-columns icons "></i> Dashboard</Link></li>
        <li><Link to="/card" className='no-underline  '> <i className="fa-solid fa-table-cells-large icons"></i>  Product</Link></li>
        <li> <Link to="/user" className='no-underline  '><i className="fa-solid fa-circle-user icons "></i>User</Link></li>
        <li><Link to="/github" className='no-underline  '> <i className="fa-brands fa-github icons"></i>Github-User-Finder</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar
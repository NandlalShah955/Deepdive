import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
       <header>
      <div className="logo">
        <img
          src="https://themexriver.com/appilo-theme/saas-classic/wp-content/themes/appilo/img/saas-classic/logo/logo.png"
          alt="Logo_image"
        />
      </div>

      <nav>
        <ul>
          <li><Link to='/form' className="hover" >Add Pet</Link></li>
          <li><Link to='/service' className="hover" >Service</Link></li>
          <li><Link to='/dashboard' className="hover" >Dashboard</Link></li>
         
        </ul>
      </nav>

      <button><a href="#">Free sign up</a></button>
    </header>

    </>
  )
}

export default Navbar
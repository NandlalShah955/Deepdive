import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
       <header>
      <div className="logo">
        <img
          src="https://th.bing.com/th?id=OIP.zie8T1Jk4m2aGFocXJa8swHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Logo_image"
        />
      </div>

      <nav>
        <ul>
          <li><Link to='/form' className="hover" >Add Pet</Link></li>
          <li><Link to='/service' className="hover" >Service</Link></li>
          <li><Link to='/' className="hover" >Dashboard</Link></li>
         
        </ul>
      </nav>

      <button><Link to="/login">Free sign up</Link></button>
    </header>

    </>
  )
}

export default Navbar
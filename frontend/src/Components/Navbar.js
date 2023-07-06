import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  return (
    <>
       <header>
      <div className="container-fluid">
      <div className='container'>
        <h2>Pet Care</h2>
        <ul>
          <li><Link to='/form' className="hover" >Add Pet</Link></li>
          {/* <li><Link to='#' className="hover" >Service</Link></li> */}
          <li> <ScrollLink
            to="serviceh"
            smooth={true}
            duration={500}
            offset={-70}
            className='hover'
          >
           Service
          </ScrollLink></li>
          <li><Link to='/' className="hover" >Dashboard</Link></li>
         
        </ul>
        <button className='navbutton'><Link to="/login">Free sign up</Link></button> 
      </div>
        
      </div>

      {/* <nav>
        <ul>
          <li><Link to='/form' className="hover" >Add Pet</Link></li>
          <li><Link to='/service' className="hover" >Service</Link></li>
          <li><Link to='/' className="hover" >Dashboard</Link></li>
         
        </ul>
      </nav>

     */}
    </header>

    </>
  )
}

export default Navbar
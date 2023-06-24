import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import "../Components/Service.css"

function Service() {
  return (
    <>
    <Navbar/>
    
    <section className="services-section">
	<div className="col-md-12">
				      <h2 className="section-title">Services</h2>
					 <p className="mb-4"> Lorem Ipsum available, but the majority have
 suffered alteration in some form.</p>
				 </div>
		<div className="container">
		     <div className="row">
			    
				 
				 
				<div className="col-lg-4">
				    <div  className="services-box">
					    <div className="services-img">
						     <img src="https://th.bing.com/th/id/OIP.QDN7zmv0ZH93BcMD66MGUwHaE8?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
						</div>
						<h3>Veterinarian</h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div> 
				 
				 
				<div className="col-lg-4">
				    <div  className="services-box">
					    <div className="services-img">
						     <img src="https://th.bing.com/th/id/OIP.wtZ_dqM2E40wFAu19XfGkAAAAA?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
						</div>
						<h3>Vaccination Care</h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div>  
				 
				 
				  
				<div className="col-lg-4">
				    <div  className="services-box">
					    <div className="services-img">
						     <img src="https://th.bing.com/th/id/OIP.biGa01zg91yFDmfd50iksAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
						</div>
						<h3>Dental Care</h3>
						<p> Lorem Ipsum available, but
the majority have suffered
alteration in some.</p>
					</div>
				 </div> 
				 
				 
				 
				 
			</div>
		</div>
	</section>









    <Footer/>    
    </>
  )
}

export default Service
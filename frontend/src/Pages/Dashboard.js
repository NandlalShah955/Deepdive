import React,{useState,useEffect} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import axios from 'axios';
import "../Components/Dashboard.css";
// "https://deepdive-backend.onrender.com/pet"


function Dashboard() {
  
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchData()
      
  }, [])


  const fetchData = async () => {
    try {
      setloading(true)
      const res = await axios.get('https://deepdive-backend.onrender.com/pet'); // Replace with your API endpoint
      setdata(res.data);
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  
  if(loading)
  return (<><img src="https://i.stack.imgur.com/kOnzy.gif" alt="Loadingimage" /></>)
  return (
    <>
    <Navbar/>
    <section class="banner-section">
	     <div class="containerhia">
		     <div class="row align-items-center">
			      <div class="col-md-6">
				      <div class="banner-text">
					      <h1>First I wanted to be
a veterinarian</h1>
						  <p>At Pet Veteran, we understand that pets are family. With our compassionate and skilled professionals, your beloved companion will receive top-notch medical care and attention.</p>
						  
					   </div>
				 </div>
				 
				 <div class="col-md-6">
				      <div class="banner-img">
					     <img src="https://user-images.githubusercontent.com/101573792/248465043-b627f5e3-3c72-4d41-a44f-a562ac58110c.png" alt=""/>
					 </div>
				 </div>
				 
			 </div>
		</div>
	</section>



  


<div className='mainfinal'>
<h2 className='center'>Our Treated Pets</h2>

    <div className='main'>
      {data.map((el) => (
        <div key={el.id}>
  <img src="https://th.bing.com/th/id/OIP.WDpVibS9KhiPPMgQN2I1KAHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        <h2 >Petname:{el.petname}</h2>
        <p >Breed:{el.breed}</p>
        <p >Age of the pet:{el.age}</p>
        <p >Name of the owner:{el.name}</p>
        </div>
      ))}
    </div>
</div>


   
    <Footer/>
    
    </>
  )
}

export default Dashboard
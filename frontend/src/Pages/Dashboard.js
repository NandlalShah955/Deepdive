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
  
  {/* Section for the main dashboard  */}

<div className='content'>
  <h1>Grooming & Pet<br/> Care</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique harum debitis adipisci beatae eius.</p>
<button>Learn more</button>
</div>


  


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
import React, { useState } from "react";
import "../Components/Style.css";
import {Link,useNavigate} from "react-router-dom";

function Login() {
//   For implementing that sliding thing in login and signup
  
    const [loginLeft, setLoginLeft] = useState("50px");
  const [registerLeft, setRegisterLeft] = useState("-400px");
  const [btnLeft, setBtnLeft] = useState("0");
  const [isButton1Clicked, setButton1Clicked] = useState(false);
  const [isButton2Clicked, setButton2Clicked] = useState(false);

//   For registering user 

const [registerdetails, setregisterdetails] = useState({});
const [logindetails, setlogindetails] = useState({})
const [loading, setloading] = useState(false);
const navigate=useNavigate();




// For getting input from the user 
const handlechange=(e)=>{
    const {name,value} =e.target;
    setregisterdetails({
        ...registerdetails,
        [name]:value
    })
    setlogindetails({
        ...logindetails,
        [name]:value
    })
    
}
// For Register the button 
const registerbutton=(e)=>{
    e.preventDefault()
console.log(registerdetails)
}



// For Login the user 
const loginbutton=(e)=>{
e.preventDefault()
console.log(logindetails)
}




// For handling sliding between login and register 
const handlelogin = () => {
    setLoginLeft("50px");
    setRegisterLeft("450px");
    setBtnLeft("0");
    setButton1Clicked(true);
    setButton2Clicked(false);
};
// For handling sliding between login and register 
  const handleregister = () => {
    setLoginLeft("-400px");
    setRegisterLeft("50px");
    setBtnLeft("0");
    setButton1Clicked(false);
    setButton2Clicked(true);
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div className="btn"></div>
            <button
              type="button"
              className="toggle-btn"
              onClick={handlelogin}
              style={{
                backgroundColor: isButton1Clicked
                  ? "rgb(152, 152, 199)"
                  : "white",
                borderRadius: "30px",
              }}
            >
              Log In
            </button>
            <button
              type="button"
              className="toggle-btn"
              onClick={handleregister}
              style={{
                left: btnLeft,
                backgroundColor: isButton2Clicked
                  ? "rgb(152, 152, 199)"
                  : "white",
                borderRadius: "30px",
              }}
            >
              Register
            </button>
          </div>
          {/* Form for the login  */}

          <form id="login" className="input-group" style={{ left: loginLeft }}
          onSubmit={loginbutton}
          >
            <span className="sapan">Email</span>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Email"
              name="email"
              onChange={handlechange}
           
              
            />
            <span className="sapan">Password</span>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Password"
              name="password"
              onChange={handlechange}
           
            />
            <button type="submit" className="submit-btn" id="logind">
              Login
            </button>
          </form>

          {/* Form for registration */}

          <form
            id="register"
            className="input-group"
            style={{ left: registerLeft }}
            onSubmit={registerbutton}
          >
            <span className="sapan">User name</span>

            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Name"
              onChange={handlechange}
              name="username"
            />
            <span className="sapan">Email</span>

            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Email"
              onChange={handlechange}
              name="email"
            />
            <span className="sapan">Password</span>

            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Password"
              onChange={handlechange}
              name="password"
            />
            <input type="checkbox" className="checg-box" />
            <span>I agree to the terms & conditons</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

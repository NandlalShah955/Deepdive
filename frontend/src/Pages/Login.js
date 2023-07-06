import React, { useState, useContext } from "react";
import "../Components/Style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  // For private routing
  const { isAuth, toggleAuth } = useContext(AuthContext);

  //   For implementing that sliding thing in login and signup

  const [loginLeft, setLoginLeft] = useState("50px");
  const [registerLeft, setRegisterLeft] = useState("-400px");
  const [btnLeft, setBtnLeft] = useState("0");
  const [isButton1Clicked, setButton1Clicked] = useState(false);
  const [isButton2Clicked, setButton2Clicked] = useState(false);

  //   For registering user

  const [registerdetails, setregisterdetails] = useState({});
  const [logindetails, setlogindetails] = useState({});
  const [loading, setloading] = useState(false);

  // FOr validating User form
  const [mistakes, setMistakes] = useState({});

  const navigate = useNavigate();

  // For getting input from the user
  const handlechange = (e) => {
    const { name, value } = e.target;
    setregisterdetails({
      ...registerdetails,
      [name]: value,
    });
  };
  const handleloginchange = (e) => {
    const { name, value } = e.target;
    setlogindetails({
      ...logindetails,
      [name]: value,
    });
  };
  // For Register the button
  const registerbutton = (e) => {
    e.preventDefault();
    var validateError = {};
    const naamvalidation = /^[a-zA-Z]*$/;
    const emailvalidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!registerdetails.name) {
      validateError.name = " name is required";
    } else if (!naamvalidation.test(registerdetails.name)) {
      validateError.name = " name is invalid";
    }
    if (!registerdetails.email) {
      validateError.email = "Email is required";
    } else if (!emailvalidation.test(registerdetails.email)) {
      validateError.email = "Email is invalid";
    }
    if (!registerdetails.password) {
      validateError.password = "Password is required";
    }
    if (Object.keys(validateError).length) {
      setMistakes(validateError);
      return;
    }

    setMistakes({});

    setloading(true);
    setTimeout(() => {
      alert("Api is Deployed on free server so maybe it can work slow");
    }, 3000);
    axios
      .post(
        "https://deepdive-backend.onrender.com/user/signup",
        registerdetails
      )
      .then((res) => {
        setloading(false);
        if ((res.data = "COngrats you have registered successfully")) {
          alert("You have registered successfully please login now");
        } else {
          alert(res.data.message);
        }
        console.log(res);
      });
  };

  // For Login the user
  const loginbutton = (e) => {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      alert("Api is Deployed on free server so maybe it can work slow");
    }, 3000);
    axios
      .post("https://deepdive-backend.onrender.com/user/login", logindetails)
      .then((res) => {
        setloading(false);

        if (res.data.message == "Login successfully" && isAuth) {
          alert(res.data.message);
          navigate("/form");
        } else if (res.data.message == "Please login to proceed") {
          alert("Please register first");
        } else if (
          res.data.message == "Password and confirm password didn't match"
        ) {
          alert("oops Wrong credentials");
        }
      });
  };

  // For handling sliding between login and register
  const handlelogin = () => {
    setLoginLeft("50px");
    setRegisterLeft("500px");
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

  // For showing loading indicator
  if (loading)
    return (
      <>
        <img src="https://i.stack.imgur.com/kOnzy.gif" alt="Loadingimage" />
      </>
    );

  return (
    <>
      <div className="hero">
        <div className="imagewla">
          <img
            src="https://th.bing.com/th/id/OIP.tdTa5p82AvTMC-89cL-8xwHaEK?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
        <div className="form-box">
          <div className="button-box">
            {/* Button for sliding between login and signup */}
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
            {/* Button for sliding between login and signup */}
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

          <form
            id="login"
            className="input-group"
            style={{ left: loginLeft }}
            onSubmit={loginbutton}
          >
            <span className="sapan">Email</span>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleloginchange}
            />

            <span className="sapan">Password</span>
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              name="password"
              onChange={handleloginchange}
            />

            <button
              type="submit"
              className="submit-btn"
              id="logind"
              onClick={toggleAuth}
            >
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
              name="name"
            />
            {mistakes.name && (
              <span className="mistakemessage">{mistakes.name}</span>
            )}
            <span className="sapan">Email</span>

            <input
              type="text"
              className="input-field"
              placeholder="Enter Your Email"
              onChange={handlechange}
              name="email"
            />
            {mistakes.email && (
              <span className="mistakemessage">{mistakes.email}</span>
            )}
            <span className="sapan">Password</span>

            <input
              type="password"
              className="input-field"
              placeholder="Enter Your Password"
              onChange={handlechange}
              name="password"
            />
            {mistakes.password && (
              <span className="mistakemessage">{mistakes.password}</span>
            )}
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

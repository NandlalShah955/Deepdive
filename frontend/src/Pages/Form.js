import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import style from "../Components/Form.module.css";
import axios from "axios";

function Form() {
  // For registering pet details
  const [petDetails, setpetDetails] = useState({});
  
  // FOr loading indicator
  const [loading, setloading] = useState(false);

  // FOr validating form
  const [mistakes, setMistakes] = useState({});


  // For getting input result  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setpetDetails({
      ...petDetails,
      [name]: value,
    });
  };


  // After submitting form function
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(petDetails);
    
    // For validating the form details 
    var validateError = {};
    if (!petDetails.petname) {
      validateError.petname = "Pet name is required.";
    }
    if (!petDetails.breed) {
      validateError.breed = "Pet breed is required.";
    }
    if (!petDetails.age) {
      validateError.age = "Pet age is required.";
    }
    if (!petDetails.name) {
      validateError.name = "Owner name is required.";
    }
    if (!petDetails.email) {
      validateError.email = "Email is required.";
    }

    if (Object.keys(validateError).length) {
      setMistakes(validateError);
      return;
    }
    setMistakes({});

  // For posting the input details to the API

    setloading(true);
    axios
      .post("https://deepdive-backend.onrender.com/pet/register", petDetails)
      .then((res) => {
        setloading(false);
       alert(res.data);
      })
      .catch((err) => {
        alert("Fill complete data");
      });
  };

  if (loading)
    return (
      <>
        <img src="https://i.stack.imgur.com/kOnzy.gif" alt="Loadingimage" />
      </>
    );
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.formwalaahai}>
          <form action="" onSubmit={handlesubmit}>
            <h1>Welcome !</h1>

            <h1>Add Pet</h1>
            <p>Your pet is Our Responsibility</p>

        {/* Form for the entering pet details  */}
        
            <div className={style.inputBox}>
              <span>Petname</span>
              <input
                type="text"
                placeholder="Enter your Petname"
                name="petname"
                onChange={handleChange}
              />
              {mistakes.petname && (
                <span className={style.mistakemessage}>{mistakes.petname}</span>
              )}
            </div>

            <div className={style.inputBox}>
              <span>Name of the breed</span>
              <input
                type="text"
                placeholder="Enter Breed of the pet"
                name="breed"
                onChange={handleChange}
              />
              {mistakes.breed && (
                <span className={style.mistakemessage}>{mistakes.breed}</span>
              )}
            </div>

            <div className={style.inputBox}>
              <span>Age of the Pet</span>
              <input
                type="number"
                placeholder="Enter Age of your pet"
                name="age"
                onChange={handleChange}
              />
              {mistakes.age && (
                <span className={style.mistakemessage}>{mistakes.age}</span>
              )}
            </div>
            <div className={style.inputBox}>
              <span>Name of the Owner</span>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                onChange={handleChange}
              />
              {mistakes.name && (
                <span className={style.mistakemessage}>{mistakes.name}</span>
              )}
            </div>
            <div className={style.inputBox}>
              <span>Email of the Owner</span>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                onChange={handleChange}
              />
              {mistakes.email && (
                <span className={style.mistakemessage}>{mistakes.email}</span>
              )}
            </div>

            <button type="submit" className={style.submit}>
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;

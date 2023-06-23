import React from 'react'
import "../Components/Style.css"

function Login() {
  return (
    <>
<div className='hero'>
    <div className='form-box'>
        <div className='button-box'>
        <div className='btn'></div>
            <button type='button' className='toggle-btn'>Log In</button>
            <button type='button' className='toggle-btn'>Register</button>
        </div>
   <form className='input-group'>
    <input type="text" className='input-field' placeholder='User Id' />
    <input type="text" className='input-field' placeholder='Enter Password' />
    <button type='submit' className='submit-btn'>Submit</button>
   </form>
   
    </div>
</div>


    </>
  )
}

export default Login
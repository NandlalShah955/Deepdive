import React from 'react'

function NotFound() {
 const style={
    height:"680px",
    background:"#F7FAFC",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    color:"gray",
}
const text={
fontSize:"40px",
}
 
 
    return (
    <div  style={style}>
     <h2 style={text}>

    404 | NotFound
     </h2>
    </div>
  )
}

export default NotFound
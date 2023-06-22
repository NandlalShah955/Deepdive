import React from 'react';
import Dashboard from '../Pages/Dashboard';
import Homepage from '../Pages/Homepage';
import {Route,Routes} from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/homepage' element={<Homepage/>}/>



    </Routes>
  )
}

export default AllRoutes
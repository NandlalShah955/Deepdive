import React from "react";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Form from "../Pages/Form";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={
    

      <Login />
     
      
      } />
      <Route path="/form" element={
     

      <Form />
      
      
      } />
    

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default AllRoutes;

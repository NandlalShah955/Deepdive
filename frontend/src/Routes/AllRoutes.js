import React from "react";
import Dashboard from "../Pages/Dashboard";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Form from "../Pages/Form";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={
      <PrivateRoute>

      <Dashboard />
      </PrivateRoute>
      
      } />
      <Route path="/form" element={
      <PrivateRoute>

      <Form />
      </PrivateRoute>
      
      } />
      <Route path="/service" element={
        <PrivateRoute>

      <Service />
        </PrivateRoute>
      
      } />

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default AllRoutes;

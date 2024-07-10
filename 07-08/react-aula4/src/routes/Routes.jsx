import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageLayout from '../layouts/PageLayout';

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />}
            />
          <Route path="/products" element={<Products />} 
            />
        </Route>   
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;
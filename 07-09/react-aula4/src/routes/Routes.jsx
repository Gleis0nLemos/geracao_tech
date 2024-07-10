import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Products from "../pages/Products";
import PageLayout from '../layouts/PageLayout';
import NotFound from '../pages/NotFound';
import Product from '../components/Product';

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />}
            />
          <Route path="/products" element={<Products />} 
            />
          <Route path="/products/:id/:name" element={<Product />}
            />
        </Route> 
        <Route path="*" element={<NotFound />}
            />  
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;
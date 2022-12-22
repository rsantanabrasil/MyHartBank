import React from 'react';
import ReactDOM from 'react-dom/client';
import Afiliado from './components/Afiliado/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/index';
import Financeiro from './components/Financeiro';
import Login from './Login/login'

//import Products from './components/ProductView';        <Route path="/product/:id" element={<Products />} />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Afiliado />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);


import { useState } from 'react'
import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/navigation/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import Cart from './components/Cart';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Login />} />
    )
);

function App() {
  const location = useLocation();

  // Verificar si la ubicación actual coincide con la ruta de login
  const isLoginPage = location.pathname === "/login";
  return (
      <>
          {!isLoginPage && <Navbar />}
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
          </div>
      </>
  );
}

export default App

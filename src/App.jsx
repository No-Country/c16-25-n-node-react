// import { useState } from 'react'
import './App.css'
import { Route } from 'wouter'

import { auth } from './firebase/config';
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'

function App() {

  return (
    <>
     <AuthProvider auth={auth}>
      <Navbar />
      <CartProvider>
        <Route path='/' component={Home} />
        <Route path='/cart' component={ShoppingCart} />
        <Route path="/product/:id" component={ProductDetail} />
      </CartProvider>

        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      <Footer />
      </AuthProvider>

    </>
  )
}

export default App

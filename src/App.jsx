// import { useState } from 'react'
import './App.css'
import { Route } from 'wouter'

import { auth } from './firebase/config';
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from './context/ProductsContext';

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'
import OrderHistory from './pages/OrderHistory'

function App() {

  return (
    <>

      <AuthProvider auth={auth}>
        <ProductsProvider>
          <Navbar />
          <CartProvider>
            <Route path='/' component={Home} />
            <Route path='/cart' component={ShoppingCart} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/orderhistory" component={OrderHistory} />
          </CartProvider >
        </ProductsProvider>

        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Footer />

      </AuthProvider >
    </>
  )
}

export default App

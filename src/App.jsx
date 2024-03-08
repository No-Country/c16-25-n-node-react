/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import './App.css'
import { Route } from 'wouter'

import { auth } from './firebase/config'
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { ProductsContext } from './context/ProductsContext'

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'
import OrderHistory from './pages/OrderHistory'
import AllProducts from './pages/AllProducts'

import { collection, getDocs } from "firebase/firestore"
import { db } from "../src/firebase/config"
import { useContext, useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const { initializeProducts } = useContext(ProductsContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
      initializeProducts(productsData)
    };
    fetchProducts();

  }, []);
  return (
    <>

      <AuthProvider auth={auth}>

        <Navbar />
        <CartProvider>
          <Route path='/' component={Home} />
          <Route path='/cart' component={ShoppingCart} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/orderhistory" component={OrderHistory} />
          <Route path="/products" component={AllProducts} />
        </CartProvider >


        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Footer />

      </AuthProvider >
    </>
  )
}

export default App

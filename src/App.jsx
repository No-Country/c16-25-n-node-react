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
import ShoppingCartPage from './pages/ShoppingCartPage'

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('Todas')
  
  console.log('App se renderiza con:',{products, searchText})
  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
    };
    fetchProducts();
  }, []);



  return (
    <>
      <AuthProvider auth={auth}>
        <Navbar 
          setSearchText={setSearchText}
          products={products}
          setCategory={setCategory}
        />
        <CartProvider>
          <Route path='/' 
          component = {()=><Home products={products} searchText={searchText} category={category}/>}   />
          <Route path='/cart' component={ShoppingCartPage} />
        </CartProvider>
        <Route path='/product'>
          <ProductDetail productId='9H1ZbrozIEAmbgHRg3NR' />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App

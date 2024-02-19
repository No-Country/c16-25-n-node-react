// import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

import { Route } from 'wouter'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'

// import { AuthProvider } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';


import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
    <>
     <AuthProvider auth={auth}>
      <Navbar />
        <Route path='/' component={Home} />
        <Route path='/product'>
          <ProductDetail productId='9H1ZbrozIEAmbgHRg3NR' />
        </Route>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      <Footer />
      </AuthProvider>

    </>
  )
}

export default App

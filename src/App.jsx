// import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'

// import { AuthProvider } from "./context/AuthContext";


function App() {

  return (
    <>
      <Navbar />
        <Route path='/' component={Home} />
        <Route path='/product'>
          <ProductDetail productId='9H1ZbrozIEAmbgHRg3NR' />
        </Route>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      <Footer />
    </>
  )
}

export default App

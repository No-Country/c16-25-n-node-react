// import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import Signin from './pages/Signin'


function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/product'>
          <ProductDetail productId='9H1ZbrozIEAmbgHRg3NR' />
        </Route>
        <Route path='/signin' component={Signin}/>
      </Switch>
      <Footer />
    </>
  )
}

export default App

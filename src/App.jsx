// import { useState } from 'react'
import './App.css'

import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <h1>Geek E-commerce</h1>
      <br />
      <br />
      <ProductList/>
      <h3>Detalles del Producto:</h3>
      <ProductDetail productId="9H1ZbrozIEAmbgHRg3NR" />
    <Footer />
    </>
  )
}

export default App

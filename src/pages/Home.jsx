import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Link } from "wouter";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import ProductList from "../components/ProductList"
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';

function Home() {
  const [user] = useAuthState(auth); // Obtén el estado de autenticación actual
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
      <h1>Geek E-commerce</h1>
      <h2>Bienvenido:
        {user && <p>Email: {user.email}</p>}
        {/* Muestra el email del usuario si está autenticado */}
      </h2>
      <button onClick={() => auth.signOut()}>Cerrar sesión</button>
      <br />
      <br />
      <Link href="/cart">Ir al Carrito</Link>

      <ProductList />

    </>
  )
}


export default Home
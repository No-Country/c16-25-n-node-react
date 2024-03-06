import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "wouter";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
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
      <Carousel />

      <div className="m-2 p-2 flex items-end w-10/12 mx-auto">
        <h1 className="mr-6 text-[#430199] text-3xl">Productos destacados</h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>

      <ProductList />

      <Features />

      <h1>Geek E-commerce</h1>
      <h2>
        Bienvenido:
        {user && <p>Email: {user.email}</p>}
        {/* Muestra el email del usuario si está autenticado */}
      </h2>
      <button onClick={() => auth.signOut()}>Cerrar sesión</button>

      <br />
      <br />

    </>
  );
}

export default Home;

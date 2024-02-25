import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { CartContext } from "../context/CartContext";
import { Link } from "wouter";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";

import velador from "../assets/velador2.png";

const ShoppingCart = () => {
  const [user] = useAuthState(auth); // Obtén el estado de autenticación actual
  const { cart, removeFromCart } = useContext(CartContext);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const salesRef = collection(db, "sales");
      const querySnapshot = await getDocs(salesRef);
      const salesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSales(salesData);
    };
    fetchSales();
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const handleAddElement = async () => {
    const cartObject = cart.reduce((obj, item) => {
      obj[item.id] = {
        nombre: item.nombre,
        precio: item.precio,
        descripcion: item.descripcion,
      };
      return obj;
    }, {});

    const newSale = {
      fecha: Date.now(), // Agregar la fecha actual
      saleFinish: cartObject,
    };

    try {
      const salesRef = collection(db, "sales");
      await addDoc(salesRef, newSale);
      console.log("Elemento de ejemplo agregado exitosamente");
    } catch (error) {
      console.error("Error al agregar elemento de ejemplo:", error);
    }
  };

  return (
    <>
      {user && <p>Email: {user.email}</p>}

      <Link href="/">Ir al Home</Link>
        <div className="m-2 p-2 flex items-end">
          <h1 className="mr-6 text-purple-700 text-3xl">
            Carrito de Compras
          </h1>
          <div className="flex-grow h-0.5 bg-purple-700"></div>
        </div>
      <div className="p-4 w-2/3 mx-auto rounded-xl">
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-3xl"
              > 
                <img
            src={velador}
            alt="IMAGE11627"
            className="w-1/3 h-full rounded-3xl border border-purple-600"
          />
          <div className="w-1/3 p-1 px-0 text-center text-xs">
            <h3>
            {item.nombre}
            </h3>
            <h3 className="font-poppins font-bold">
            {item.precio}
              {/* Lámpara I Mario Bros - Rosado */}
            </h3>
          </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col w-3/4 mx-auto my-6">
          <div className="flex-grow h-0.5 bg-purple-700"></div>
          <div className="flex justify-between ">
            <h3 className="my-2">
              {/* $30,00 */}
              SubTotal
            </h3>
            <h3 className="p-2">{/* {product.precio} */}</h3>
          </div>
          <div className="flex-grow h-0.5 bg-purple-700"></div>

          <div className="flex flex-col gap-4 mt-6">
            <Link href="/cart">
              <button
                onClick={handleAddElement}
                className="bg-blue-800 w-full h-8 mx-auto p-0 text-white  text-md font-bold rounded-lg"
              >
        Finalizar Compra
              </button>
            </Link>
            <Link href="/">
              <button
                // onClick={() => handleAddToCart(product)}
                className="bg-gray-100 w-full h-8 mx-auto p-0 text-black text-md font-bold rounded-lg"
              >
                Ver mas productos
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col shadow-lg mb-3 px-14 pt-6 pb-2 text-left rounded-lg">
          <h2 className="mr-6 text-purple-700 text-xs ">
            Tu código postal
          </h2>
          <div>
          <input className=" w-1/3" type="text" />
          <button className="bg-blue-800 w-1/3 h-8">
            Calcular</button>
        </div>
        </div> 
        <div className="bg-gray-100 jusitfy-between shadow-lg mb-2 px-14 pt-6 pb-2 flex flex-col text-left rounded-lg">
        <h2 className="mr-6 text-purple-700 text-xs ">
            Datos de facturación
        </h2>
        <div className="flex justify-between py-1">
        <input placeholder="Nombre" className="w-1/3 h-8" type="text" />
        <input placeholder="Apellido" className="w-1/3 h-8" type="text" />
        </div>
        
        <div className="bg-gray-100 jusitfy-between flex flex-col text-left rounded-lg">
        <div className="flex justify-between py-1">
        <input 
        placeholder="DNI" 
        className=" w-1/3 h-8" type="text" />
        <input 
        placeholder="Telefono"
        className=" w-1/3 h-8" type="text" />
        </div>
        </div>
        <div className="bg-gray-100 jusitfy-between flex flex-col text-left rounded-lg">
        <div>
        <input 
        placeholder="Correo Electronico"
        className="py-1 w-2/3 h-8" type="text" />
        </div>
        <h2 className="mt-4 text-purple-700 text-xs ">
            Domicilio
        </h2>
        <div className="flex justify-between py-1">
        <input 
        placeholder="Calle"
        className="w-1/3 h-8" type="text" />
        <input 
        placeholder="Número"
        className="w-1/3 h-8" type="text" />
        </div>
        </div>
        </div>
      </div>

      <div className="m-2 p-2 flex items-end">
        <h1 className="mr-6 text-purple-700 text-3xl">Historial de Compras</h1>
        <div className="flex-grow h-0.5 bg-purple-700"></div>
      </div>

      <div className="flex flex-wrap">
        {sales.map((sale) => (
          <div key={sale.id}>
            <div className="bg-gradient-to-br from-white to-transparent rounded-lg shadow-lg py-4 px-6 m-6 w-64 h-72 text-left">
              <h2>Fecha: {formatDate(sale.fecha)}</h2>
              {Object.values(sale.saleFinish).map((product) => (
                <div key={product.id}>
                  <p>Nombre: {product.nombre}</p>
                  <p>Precio: {product.precio}</p>
                  <p>Descripción: {product.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;

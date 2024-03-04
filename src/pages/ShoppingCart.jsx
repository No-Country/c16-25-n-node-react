import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { CartContext } from "../context/CartContext";
import { Link } from "wouter";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";

import { CartItem } from "../components/CartItem";

const ShoppingCart = () => {
  const [user] = useAuthState(auth); // Obtén el estado de autenticación actual
  const { cart, cartTotal } = useContext(CartContext);
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

      <div className="m-2 p-2 flex items-end">
        <h1 className="mr-6 text-[#430199] text-3xl">
          Carrito de Compras
        </h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>
      <div className="p-4 w-2/3 mx-auto rounded-xl">
        {cart.length === 0 ? (
          <p className="text-black">No hay productos en el carrito.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item) => (
              <CartItem key={`cartItem_${item.nombre}`} item={item} />
            ))}
          </div>
        )}
        
        <div className="flex flex-col w-2/5 mx-auto my-6 text-black font-semibold">
        <div className="flex-grow h-0.5 bg-purple-700"></div>
        <div className="flex justify-between ">
          <h3 className="my-2">
            Subtotal
          </h3>
          <h3 className="p-2">{`$ ${cartTotal()},00`}</h3>
        </div>
        <div className="flex-grow h-0.5 bg-purple-700 mb-6"></div>

        <div className="flex flex-col gap-4 mt-6 mb-10 ">
          <Link href="/cart">
            <button
              onClick={handleAddElement}
              className="flex items-center justify-center bg-[#430199] w-full h-10 mx-auto p-0 text-white  text-lg font-semibold rounded-lg"
            >
              Finalizar compra
            </button>
          </Link>
          <Link href="/">
            <button
              className="flex items-center justify-center bg-[#F5F5F5] w-full h-10 mx-auto text-[#430199] text-lg font-semibold rounded-lg"
            >
              Ver mas productos
            </button>
          </Link>
        </div>
      </div>
        
        <div className="bg-gray-100 flex flex-col shadow-lg mb-3 px-14 pt-6 pb-2 text-left rounded-lg">
          <h2 className="mr-6 text-[#430199] text-xs ">
            Tu código postal
          </h2>
          <div>
            <input className=" w-1/3" type="text" />
            <button className="bg-blue-800 w-1/3 h-8">
              Calcular</button>
          </div>
        </div>
        <div className="bg-gray-100 jusitfy-between shadow-lg mb-2 px-14 pt-6 pb-2 flex flex-col text-left rounded-lg">
          <h2 className="mr-6 text-[#430199] text-xs ">
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
            <h2 className="mt-4 text-[#430199] text-xs ">
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
        <h1 className="mr-6 text-[#430199] text-3xl">Historial de Compras</h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>

      <div className="flex flex-wrap">
        {sales.map((sale) => (
          <div key={sale.id}>
            <div className="bg-gradient-to-br from-white to-transparent rounded-lg shadow-lg py-4 px-6 m-6 w-64 h-72 text-left">
              <h2>Fecha: {formatDate(sale.fecha)}</h2>
              {Object.values(sale.saleFinish).map((product) => (
                <div key={`cart_${product.nombre}`}>
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

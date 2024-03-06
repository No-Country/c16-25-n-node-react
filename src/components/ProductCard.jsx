import { useContext, useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";
import { Link } from "wouter";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product,quantity) => {
    addToCart(product,quantity);
  };

  // const getImageURL = async (imageName) => {
  //   const storageRef = storage.ref();
  //   const imageRef = storageRef.child(imageName);
  //   const downloadURL = await imageRef.getDownloadURL();
  //   return downloadURL;
  // };

  return (
    <div className="box-border justify-between bg-gray-200 w-[200px] h-72 shadow-lg flex flex-col pt-6 pb-1 px-4 rounded-3xl border border-purple-600 overflow-hidden"
    >
      <img
        src={product.imagen}
        alt="IMAGE11627"
        // src={getImageURL(product.imagen)}
        // alt={product.imagen}
        className="w-full h-2/3 rounded-3xl border border-purple-600"
      />
      <div className="p-1 px-0 text-center text-xs font-bold text-black">
        <h3 className="font-poppins">
          {product.nombre}
          {/* Lámpara I Mario Bros - Rosado */}
        </h3>
        <h3 className="  ">
          $ {product.precio}
          {/* $30,00 */}
        </h3>
        <div className="flex mt-2 justify-between">
          <Link href={`/product/${product.id}`}>
            <button className="bg-purple-500 w-16 h-6 p-0 text-black text-center text-auto font-bold rounded-lg">
              Ver más
            </button>
          </Link>
          <Link href={`/cart`}>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-purple-500 w-16 h-6 p-0 text-black text-center text-xs font-bold rounded-lg"
            >
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;

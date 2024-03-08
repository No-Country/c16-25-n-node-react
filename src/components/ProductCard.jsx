/* eslint-disable react/prop-types */
import { Link } from "wouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [user] = useAuthState(auth);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
  };

  return (
    <>
      <div
        key={product.id}
        className="h-full justify-between bg-[#F3F2F5] shadow-lg flex flex-col pt-6 pb-1 px-4 rounded-3xl border border-purple-600 overflow-hidden"
      >
        <img
          src={product.imagen}
          alt={product.nombre}
          className=" aspect-square object-cover rounded-3xl border border-purple-600"
        />
        <div className="p-1 px-0 text-center font-semibold text-black">
          <h3 className="text-[#000000]">
            {product.nombre}
          </h3>
          <h3 className="text-[#000000]">
            $ {product.precio}
          </h3>
          <div className="flex mt-2 justify-around">
            <Link href={`/product/${product.id}`}>
              <button className="flex justify-center items-center bg-[#A599FE] m-2 p-2 px-3 text-black text-center font-semibold rounded-lg">
                Ver más
              </button>
            </Link>
            {user ?
            (
            <Link href={`/cart`}>
              <button
                onClick={() => handleAddToCart(product, 1)}
                className="flex justify-center items-center bg-[#A599FE] m-2 p-2 px-3 text-black text-center font-semibold rounded-lg"
              >
                Comprar
              </button>
            </Link>
            ):(
              <Link href={`/login`}>
              <button
                className="flex justify-center items-center bg-[#A599FE] m-2 p-2 px-3 text-black text-center font-semibold rounded-lg"
              >
                Comprar
              </button>
            </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import { useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "wouter";


const ProductCard = ({product}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product,quantity) => {
    addToCart(product,quantity);
  };
  
  return (
    <>
        <div
          key={product.id}
          className=" justify-between bg-[#F3F2F5] w-80  shadow-lg flex flex-col pt-6 pb-1 px-4 rounded-3xl border border-purple-600 overflow-hidden"
        >
          <img
            src={product.imagen}
            alt={product.nombre}
            // src={getImageURL(product.imagen)}
            // alt={product.imagen}
            className="w-full h-2/3 rounded-3xl border border-purple-600"
          />
          <div className="p-1 px-0 text-center font-semibold text-black">
            <h3 className="text-[#000000]">
              {product.nombre}
              {/* Lámpara I Mario Bros - Rosado */}
            </h3>
            <h3 className="text-[#000000]">
             $ {product.precio}
            </h3>
            <div className="flex mt-2 justify-between">
            <Link href={`/product/${product.id}`}>
              <button className="flex justify-center items-center bg-[#A599FE] m-2 p-2 px-6 text-black text-center font-semibold rounded-lg">
                Ver más
              </button>
              </Link>
              <Link href={`/cart`}>
              <button
                onClick={() => handleAddToCart(product,1)}
                className="flex justify-center items-center bg-[#A599FE] m-2 p-2 px-6 text-black text-center font-semibold rounded-lg"
              >
                Comprar
              </button>
              </Link>

            </div>
          </div>
        </div>
    </>
  );
};

export default ProductCard;

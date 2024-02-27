import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams, Link } from "wouter";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import velador from "../assets/velador.png";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([null]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productSnapshot = await getDoc(productRef);
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      } else {
        console.log("El producto no existe");
        // Realizar alguna acción adicional, como mostrar un mensaje de error o redirigir al usuario
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }
  

  return (
    <>
      <div className="m-2 p-2 flex items-end">
        <h1 className="mr-6 text-purple-700 text-3xl">
          Detalle del Producto 
        </h1>
        <div className="flex-grow h-0.5 bg-purple-700"></div>
      </div>

      <div className="flex flex-col w-full h-auto shadow-lg items-center py-4 px-8 ">
      
      <div className="m-4 p-4 ">
        <div
          key={product.id}
          className="flex items-center justify-around"
        >
          <img
            src={velador}
            alt="IMAGE11627"
            className="w-2/5 h-full rounded-3xl border border-purple-600"
          />
          <div className="w-1/3 p-1 px-0 text-center text-xs">
            <h3>
            {product.descripcion}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sunt magnam? Distinctio enim qui excepturi architecto quia, minus illum possimus asperiores minima iusto ipsum recusandae perspiciatis omnis amet, fugit repudiandae.
            </h3>
            <h3 className="font-poppins font-bold">
            {product.descripcion}
              {/* Lámpara I Mario Bros - Rosado */}
            </h3>
          </div>
          </div>
          <div className="flex flex-col w-3/4 mx-auto my-6">
          <div className="flex-grow h-0.5 bg-purple-700"></div>
          <div className="flex justify-between ">
          <h3 className="my-2">
              {/* $30,00 */}
              SubTotal
            </h3>
            <h3 className="p-2">
              {product.precio}
            </h3>
            </div>
            <div className="flex-grow h-0.5 bg-purple-700"></div>

            <div className="flex flex-col gap-4 mt-6">
            <Link href="/cart">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-800 w-full h-8 mx-auto p-0 text-white  text-md font-bold rounded-lg"
              >
                Comprar
              </button>
              </Link>
              <Link href="/">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gray-100 w-full h-8 mx-auto p-0 text-black text-md font-bold rounded-lg"
              >
                Ver mas productos
              </button>
              </Link>
            </div>
            </div>
          </div>
          </div>
    </>
  );
};

export default ProductDetail;

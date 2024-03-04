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
  const [count, setCount] = useState(0);

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

  const handleAddToCart = (product,count) => {
    addToCart(product,count);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  const increment = () => {
    setCount(current => current + 1);

  };

  const decrement = () => {
      if (count > 0) {
          setCount(current => current - 1);
      }
  };

  return (
    <>
      <div className="my-8 w-10/12 flex items-end justify-center mx-auto">
        <h1 className="mx-6 text-[#430199] font-semibold text-3xl">
          Detalle del Producto
        </h1>
        <div className="flex-grow h-0.5 bg-[#430199] mb-2"></div>
      </div>

      <div className="flex flex-row w-3/4 mx-auto items-center h-auto mb-16">
        
        <div className="w-2/4">
          <img
            src={velador}
            alt="IMAGE11627"
            className="w-3/5 ml-4 rounded-3xl border border-purple-600 aspect-square object-cover"
          />
        </div>

        <div key={product.id} className="flex flex-col items-center justify-center w-2/4">

          <div className="w-3/4 m-4 p-4 space-y-4 text-center">
            <h3 className="text-lg text-[#5C5E65]">{product.descripcion}</h3>
            <h3 className="text-lg text-black font-bold">{product.nombre}</h3>
          </div>

          <div className='flex items-center p-2 border border-[#7A1AFF] rounded-full justify-around space-x-4 text-2xl w-1/3 bg-[#F5F5F5]'>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#7A1AFF] text-white font-bold cursor-pointer select-none' onClick={() => decrement()}> - </div>
            <div className='font-semibold text-black text-lg w-6'>{count}</div>
            <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#7A1AFF] text-white font-bold cursor-pointer select-none' onClick={() => increment()}> + </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col w-2/5 mx-auto my-6 text-black font-semibold">
        <div className="flex-grow h-0.5 bg-purple-700"></div>
        <div className="flex justify-between ">
          <h3 className="my-2">
            Subtotal
          </h3>
          <h3 className="p-2">{`$ ${product.precio*count},00`}</h3>
        </div>
        <div className="flex-grow h-0.5 bg-purple-700 mb-6"></div>

        <div className="flex flex-col gap-4 mt-6 mb-10 ">
          <Link href="/cart">
            <button
              onClick={() => handleAddToCart(product,count)}
              className="flex items-center justify-center bg-[#430199] w-full h-10 mx-auto p-0 text-white  text-lg font-semibold rounded-lg"
            >
              Iniciar compra
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
    </>
  );
};

export default ProductDetail;

import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);
      const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.id}>
          <div className="bg-gradient-to-br from-white to-transparent rounded-lg shadow-lg py-4 px-6 m-6 w-64 h-72 text-left">
            <span className="text-xs  font-bold text-blue-500">
              {product.categoria}
            </span>
            <h2 className="text-2xl font-bold -my-0.5">{product.nombre}</h2>
            <p className="text-xs font-bold text-gray-500">
              {product.descripcion}
            </p>
            {/* <div className="flex justify-center mb-4">
                  <img src="imagen-del-producto.jpg" alt="Producto" className="w-3/4"/>
                </div> */}
            <div className="flex justify-center items-center bg-gray-200 h-24 my-4">
              <span className="text-gray-500 text-5xl">Imagen</span>
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="text-md font-bold text-gray-500">
                {product.precio}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="text-xs text-gray-300 bg-blue-700 hover:bg-blue-600 text-xxs py-2 px-2 rounded-2xl"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../context/CartContext";

const ProductList = ({ products, searchText, category }) => {//props para filtrado y busqueda

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  //Busqueda

  //productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(products)
  //useEffect busqueda
  useEffect(() => {

    const searchProducts = () => {
      let newFilteredProducts = products
      if (searchText && searchText.trim() !== '')
      {
        newFilteredProducts = products.filter((p) => {
          if (searchText && p.descripcion.toString().toLowerCase().indexOf(searchText) > 1
            || p.nombre.toString().toLowerCase().indexOf(searchText) > 1)
          {
            return p
          }
        })
      }
      setFilteredProducts(newFilteredProducts)
    }
    searchProducts()

    return () => {
      setFilteredProducts([].concat(products))
    }
  }, [searchText, products]);

  //filtrado por categoria:
  const categorias = [
    'Cocina',
    'Muebles'
  ]
  useEffect(() => {

    const filterProducts = () => {
      let newFilteredProducts = [].concat(filteredProducts)
      if (category)
      {
        categorias.forEach((cat) => {
          if (category.toString().trim() === cat){
            newFilteredProducts = products.filter((p) => p.categoria === cat)
          }
        })

      }
      setFilteredProducts(newFilteredProducts)
    }
    filterProducts()

    // return () => {
    //   setFilteredProducts([].concat(products))
    // }
  }, [category, products]);


  return (
    products ?
      <div className="flex flex-wrap">
        {filteredProducts.map((product) => (
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
      : (<div>loading...</div>)
  );
};

export default ProductList;
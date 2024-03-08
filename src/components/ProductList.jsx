/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";


const ProductList = () => {
  const { filteredProducts } = useContext(ProductsContext);

  const bestProducts = filteredProducts.filter(e => e.destacado === true)
  
  return (
    <>
      <div className="flex flex-wrap gap-4 m-2 justify-between w-10/12 mx-auto mb-16">
        {bestProducts.length !== 0 ? bestProducts.map((product) => (
          <div key={`productcard${product.nombre}`} className="flex justify-around items-center w-[28%]">
            <ProductCard product={product} />
          </div>
          
        )) : <div>No se encontraron resultados</div>}
      </div>
    </>
  );
};

export default ProductList
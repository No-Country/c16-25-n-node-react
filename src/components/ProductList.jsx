/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";


const ProductList = () => {
  const { filteredProducts } = useContext(ProductsContext);

  const bestProducts = filteredProducts.filter(e => e.destacado === true)
  
  return (
    <>
      <div className="flex flex-wrap gap-10 m-4 justify-between w-10/12 mx-auto mb-16">
        {bestProducts.length !== 0 ? bestProducts.map((product) => (
          <div className="w-[330px]">
            <ProductCard key={`productcard${product.nombre}`} product={product} />
          </div>
          
        )) : <div>No se encontraron resultados</div>}
      </div>
    </>
  );
};

export default ProductList
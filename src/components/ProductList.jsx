import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";


const ProductList = () => {
  const {allProducts, filteredProducts } = useContext(ProductsContext);

  return (
    <div className="flex flex-wrap gap-10 m-4 justify-between w-10/12 mx-auto mb-16">
      {filteredProducts.length !== 0 ? filteredProducts.map((product) => (
      <ProductCard key={`productcard${product.nombre}`} product = {product} />
      )) : <div>No se encontraron resultados</div>}
    </div>
  );
};

export default ProductList;
import ProductCard from "./ProductCard";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

const ProductList = () => {
  const { allProducts } = useContext(ProductsContext);

  const bestProducts = allProducts.slice(0,4)
  return (
    <>
      <div className="flex flex-wrap gap-4 m-4 justify-center  ">
        {
        
        bestProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList
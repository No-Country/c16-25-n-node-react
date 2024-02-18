import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";



const ProductDetail = ({productId}) => {
    
    const [product, setProduct] = useState(null);
    
    // PASAR el id por PROP
    // const productId = "9H1ZbrozIEAmbgHRg3NR"
    useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", productId);
      const docSnapshot = await getDoc(productRef);
      if (docSnapshot.exists()) {
        setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
      } else {
        console.log("No product found with the provided ID");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.categoria}</h1>
      <p>{product.descripcion}</p>
      <a href="">{product.imagen}</a>
      {/* Mostrar otros detalles del producto aquí */}
    </div>
  );
};

export default ProductDetail;
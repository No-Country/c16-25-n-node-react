import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsRef = collection(db, "products");
            const querySnapshot = await getDocs(productsRef);
            const productsData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        
        <div>
            {products.map((product) => (
                 <div key={product.id}>
                     <h1 className="text-3xl font-bold underline">Producto desde Firebase:</h1>
                     <h1>{product.nombre}</h1>
                     <p>{product.descripcion}</p>
                     <p>{product.categoria}</p>
                     <p>{product.precio}</p>
                     <p>{product.imagen}</p>


                     {/* Mostrar otros datos del libro aquí */}
                 </div>

            ))}
            </div>
        );
    };
    
    export default ProductList;
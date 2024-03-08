import ProductOrder from '../components/ProductOrder'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { meses } from '../assets/meses'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export function OrderHistory() {
  const [sales, setSales] = useState([])
  const { allProducts } = useContext(ProductsContext)
  const [user] = useAuthState(auth);
  

  useEffect(() => {
    const fetchSales = async (usuario) => {
      try {
        const salesRef = collection(db, 'sales');
        const q = query(salesRef, where('usuario', '==', usuario)); // Query sales for a specific usuario
        const querySnapshot = await getDocs(q);
        const salesData = querySnapshot.docs.map(doc => doc.data());
        setSales(salesData);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales(user.email);
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    return `${day} de ${meses[parseInt(month)]}`;
  };

  return (
    <div className='bg-white'>
      <div className="mx-24 p-2 flex items-baseline">
        <h1 className="mr-6 text-[#430199] lg:text-3xl text-xl font-bold">Mis compras</h1>
        <div className="flex-grow h-[1px] bg-[#430199]"></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {sales.map((s) => (
          <div className='lg:w-2/4 w-2/3' key={s.id}>
            {Object.entries(s.saleFinish).map(([id, p] = p) => (
              <div key={`order_${p.nombre}`}>
                <ProductOrder
                  name={p.nombre}
                  fecha={formatDate(s.fecha)}
                  imagen={allProducts.find((product) => product.id === id)?.imagen}
                  productId={id}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory

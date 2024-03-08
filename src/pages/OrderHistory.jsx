import ProductOrder from '../components/ProductOrder'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "wouter";

export function OrderHistory() {
  const [sales, setSales] = useState([])
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

  const convertDateToNumber = (dateString) => {
    const cleanedDateString = dateString.replace(/[\/\-:]/g, '');
    const dateNumber = parseInt(cleanedDateString, 10);
    return dateNumber;
  };

  return (
    <div className='bg-white'>
      <div className="mx-24 p-2 flex items-baseline">
        <h1 className="mr-6 text-[#430199] lg:text-3xl text-xl font-bold">Mis compras</h1>
        <div className="flex-grow h-[1px] bg-[#430199]"></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {sales.length == 0 ? (
          <div className='flex flex-col p-4 space-y-4 pb-48'>
            <h2 className='text-black p-4'>Aún no has realizado ninguna compra</h2>
            <Link href="/products">
              <button
                className="flex items-center justify-center bg-[#430199] w-2/4 h-10 mx-auto p-0 text-white  text-lg font-semibold rounded-lg"
              >
                Ver productos
              </button>
            </Link>
          </div>
        ) : (
          <br />
        )}
        {sales.map((s) => (
          <div className='lg:w-2/4 w-2/3 space-y-4' key={s.id}>
            <div className="m-4 mb-3 p-0 flex items-center justify-end">
              <h3 className="ml-24 mr-6 text-[#A599FE]  font-semibold">Orden N° {convertDateToNumber(s.fecha)}</h3>
              <div className="flex-grow h-[1px] bg-[#A599FE]"></div>
            </div>
            <div className='flex flex-col bg-[#F3F2F5] rounded-[2em] shadow-[0px_4px_4px_0px_rgb(0,0,0,0.25)]'>
              <h2 className='text-[#7A1AFF] font-semibold p-4'>ENTREGADO</h2>
              <span className='text-left ml-14 text-black'>Fecha: {s.fecha}</span>
              {s.saleFinish.map((p) => (
                <div key={`order_${s.nombre}_${p.nombre}`}>
                  <ProductOrder
                    nombre={p.nombre}
                    imagen={p.imagen}
                    productId={p.id}
                    cantidad={p.cantidad}
                    precio={p.precio}
                  />
                </div>
              ))}
              <span className='text-right mr-14 mb-4 text-black font-semibold'>Total: $ {s.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderHistory

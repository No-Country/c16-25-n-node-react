import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { CartContext } from "../context/CartContext";
import { Link, Redirect } from "wouter";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartItem } from "../components/CartItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const ShoppingCart = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [user] = useAuthState(auth);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear().toString();
    const hour = d.getHours().toString().padStart(2, "0");
    const minute = d.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year}-${hour}:${minute}`;
  };

  const handleAddElement = async () => {
    if (cart.length === 0) {
      // If cart is empty, show SweetAlert message and redirect to '/products' route
      Swal.fire({
        title: '¡Atención!',
        text: 'Tu carrito está vacío. Por favor, agrega productos antes de realizar un pedido.',
        icon: 'warning',
        confirmButtonText: `Ver productos`,
        confirmButtonColor: '#430199',
      }).then(() => {
        setShowSuccessPopup(true);
        });
      return; // Exit the function early
    }

    const cartArray = cart.map(item => ({
      id: item.id,
      imagen: item.imagen,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.quantity
    }));

    const newSale = {
      fecha: formatDate(Date.now()), // Agregar la fecha actual
      saleFinish: cartArray,
      total: cartTotal(),
      usuario: user.email
    };

    try {
      const salesRef = collection(db, "sales");
      await addDoc(salesRef, newSale);
      Swal.fire({
        title: 'Exito!',
        text: 'Tu orden ha sido registrada exitosamente',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#430199'
      });
      clearCart()
    } catch (error) {
      console.error("Error al agregar elemento de ejemplo:", error);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <div className="m-2 p-2 flex items-end  ">
        <h1 className="mr-6 text-[#430199] text-3xl">
          Carrito de Compras
        </h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>
      <div className="p-4 w-2/3 mx-auto min-w-[400px] rounded-xl">
        {cart.length === 0 ? (
          <p className="text-black">No hay productos en el carrito.</p>
        ) : (
          <div className="space-y-2">
            {cart.map((item) => (
              <CartItem key={`cartItem_${item.nombre}`} item={item} />
            ))}
          </div>
        )}

        <div className="flex flex-col min-w-[300px] w-2/5 mx-auto my-6 text-black font-semibold">
          <div className="flex-grow h-0.5 bg-purple-700"></div>
          <div className="flex justify-between ">
            <h3 className="my-2">
              Subtotal
            </h3>
            <h3 className="p-2">{`$ ${cartTotal()},00`}</h3>
          </div>
          <div className="flex-grow h-0.5 bg-purple-700 mb-6"></div>

          <div className="flex flex-col gap-4 mt-6 mb-10 ">
            <Link href="/">
              <button
                onClick={handleAddElement}
                className="flex items-center justify-center bg-[#430199] w-full h-10 mx-auto p-0 text-white  text-lg font-semibold rounded-lg"
              >
                Finalizar compra
              </button>
            </Link>
            <Link href="/products">
              <button
                className="flex items-center justify-center bg-[#F5F5F5] w-full h-10 mx-auto text-[#430199] text-lg font-semibold rounded-lg"
              >
                Ver mas productos
              </button>
            </Link>
          </div>
        </div>
        {showSuccessPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>¡Atención!</h2>
              <p>Tu carrito está vacío. Por favor, agrega productos antes de realizar un pedido.</p>
              <button onClick={closeSuccessPopup}>Ver productos</button>
            </div>
          </div>
        ) && <Redirect to="/products" />}
      </div>
    </>
  );
};

export default ShoppingCart;

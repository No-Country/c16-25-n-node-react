import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "wouter";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <Link href="/">Ir al Home</Link>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>

      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span className="text-lg">{item.nombre}</span>
              <span className="text-lg">{item.descripcion}</span>
              <span className="text-lg">{item.precio}</span>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 ml-2"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
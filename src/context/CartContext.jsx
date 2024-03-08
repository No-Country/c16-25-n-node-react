import { createContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Checkea si está en el carrito, devuelve true o false
  const isInCart = itemId => cart.some(e => e.id === itemId);

  //Chequea si está producto en carrito y aumento su cantidad, sino lo agrega
  const handleAddToCart = (product, quantity) => {
    const currentCart = [...cart];
    if (isInCart(product.id)) {
      const productIndex = cart.findIndex(e => e.id === product.id);
      currentCart[productIndex].quantity = quantity;

      setCart(currentCart);
    } else {
      const newProduct = { ...product, quantity: quantity };
      const newList = [...cart, newProduct];
      setCart(newList);
    }
  };

  /* const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  }; */

  //Calcula el total de la compra
  const cartTotal = () => cart.reduce((acc, e) => acc + (e.precio * e.quantity), 0);

  //Vacía el carrito
  const clearCart = () => setCart([]);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart, cartTotal: cartTotal, clearCart: clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
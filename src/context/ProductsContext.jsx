import { createContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleFilterByCategory = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
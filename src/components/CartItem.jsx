import React from 'react'
import { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

export const CartItem = ({ item }) => {
    const { nombre, precio, quantity, imagen,id } = item

    const [count, setCount] = useState(quantity);
    const { removeFromCart, addToCart } = useContext(CartContext);

    const increment = () => {
        setCount(current => current + 1);
        addToCart(item, count+1)
    };

    const decrement = () => {
        if (count > 0) {
            setCount(current => current - 1);
            addToCart(item, count-1)
        }
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div
            key={`itemCart${id}`}
            className="flex items-center justify-around bg-gray-100 p-3 rounded-3xl shadow-md"
        >
            <img
                src={imagen}
                alt={nombre}
                className="w-1/5 rounded-3xl border border-purple-600"
            />
            <div className="w-1/3 p-1 px-0 text-center text-lg text-black">
                <div className='flex flex-rox space-x-2'>
                    <div className='w-8 flex space-x-1'>
                        <span>X</span>
                        <span className=''>{quantity}</span>
                    </div>
                    <div>
                        <h3 className="font-poppins font-bold">
                            {nombre}
                        </h3>
                        <h3 className="font-poppins font-bold">
                            {`$ ${precio}`}
                        </h3>
                    </div>
                </div>

                <div className=''>
                    <div className='flex items-center p-2 border border-[#7A1AFF] rounded-full justify-around'>
                        <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#7A1AFF] text-white font-bold cursor-pointer select-none' onClick={decrement}> - </div>
                        <div className=''>{count}</div>
                        <div className='flex justify-center items-center w-8 h-8 rounded-full bg-[#7A1AFF] text-white font-bold cursor-pointer select-none' onClick={() => increment()}> + </div>
                    </div>
                </div>

            </div>
            <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 text-2xl"
            >
            <FaTrashAlt />
            </button>
        </div>
    )
}

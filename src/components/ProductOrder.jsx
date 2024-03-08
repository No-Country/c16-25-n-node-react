/* eslint-disable react/prop-types */

import { Link } from "wouter"

function ProductOrder({ nombre, imagen, productId, cantidad, precio }) {
  return (
    <div className="text-black my-2 lg:text-lg text-base min-w-full ">
      <div className=" min-h-[10em] border-solid  flex  items-center justify-center">

        <img className='ml-10 object-cover rounded-[32px] w-36 h-36 min-h-36 min-w-36 border-[#7a1aff] border-solid border-[1px]' src={imagen} alt={nombre} />

        <div className='text-left flex flex-col h-36 w-2/4 md:ml-24 ml-6 mr-10'>
          <div className="self-end">
            <Link href={`/product/${productId}`}>
              <button className='text-white bg-[#7A1AFF] text-xs max-w-max  '>Volver a comprar</button>
            </Link>
          </div>
          <div className='flex flex-col mt-10'>
            <span className='font-semibold lg:text-xl text-base'>x {cantidad} {nombre}</span>
            <span className='font-semibold text-base text-gray-700'>$ {precio}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOrder
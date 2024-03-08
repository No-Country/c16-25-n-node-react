/* eslint-disable react/prop-types */

import { Link } from "wouter"

function ProductOrder({ name, fecha, imagen, productId }) {
  return (
    <div className="text-black my-2 lg:text-lg text-base min-w-full ">
      <div className="m-0 mb-3 p-0 flex items-center justify-end">
        <h3 className="ml-24 mr-6 text-[#A599FE]  font-semibold">{fecha}</h3>
        <div className="flex-grow h-[1px] bg-[#A599FE]"></div>
      </div>
      <div className="bg-[#F3F2F5] min-h-[10em] rounded-[2em] border-solid shadow-[0px_4px_4px_0px_rgb(0,0,0,0.25)] flex  items-center justify-center">

        <img className='ml-10 object-cover rounded-[32px] w-36 h-36 min-h-36 min-w-36 border-[#7a1aff] border-solid border-[1px]' src={imagen} alt="Imagen de producto" />

        <div className='text-left flex flex-col h-36 w-2/4 md:ml-24 ml-6 mr-10'>
          <div className="self-end">
            <Link href={`/product/${productId}`}>
              <button className='text-white bg-[#7A1AFF] text-xs max-w-max  '>Volver a comprar</button>
            </Link>
          </div>
          <div className=' mt-10'>
            <h2 className='text-[#7A1AFF] font-semibold'>ENTREGADO</h2>
            <div className='font-semibold lg:text-xl text-base'>{name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOrder
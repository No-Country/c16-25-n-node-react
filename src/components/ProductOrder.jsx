/* eslint-disable react/prop-types */

function ProductOrder({ desc, fecha, imagen }) {
    return (
        <div className="text-black my-2 w-2/3 text-lg ">
            <div className="m-0 mb-3 p-0 flex items-center justify-end">
                <h3 className="ml-24 mr-6 text-[#A599FE]  font-medium">{fecha}</h3>
                <div className="flex-grow h-[1px] bg-[#A599FE]"></div>
            </div>
            <div className="bg-[#F3F2F5] h-[10em] w-full rounded-[2em] border-solid shadow-[0px_4px_4px_0px_rgb(0,0,0,0.25)] flex  items-center justify-center">
                <div className=' '>
                    <img className=' object-cover rounded-[32px] w-36 h-36 border-[#7a1aff] border-solid border-[1px]' src={imagen} alt="" />
                </div>
                <div className='text-left flex flex-col h-36 w-2/4 ml-24'>
                    <button className='text-white bg-[#7A1AFF] text-xs max-w-max self-end '>Volver a comprar</button>
                    <div className=' mt-10'>
                        <h2 className='text-[#7A1AFF] font-semibold'>ENTREGADO</h2>
                        <div className='font-semibold text-xl'>{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOrder
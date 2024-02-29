import ProductOrder from '../components/ProductOrder'
import portallavesimg from '../assets/Portallavesstarwars.jpg'
import iphoneholderimg from '../assets/iPhone holder.jpg'
import veladorimg from '../assets/velador.png'

const products = [
  {
    nombre: "silla",
    descripcion: "Portacelular I Iron Man - Rojo",
    fecha: "15 de Enero",
    imagen: iphoneholderimg
  },
  {
    nombre: "llavero iron man",
    descripcion: "Portacelular I Star Wars - Negro",
    fecha: "6 de Noviembre",
    imagen: portallavesimg
  }
]

export function OrderHistory() {

  return (
    <div className='bg-white'>
      <div className="mx-24 p-2 flex items-baseline">
        <h1 className="mr-6 text-[#430199] text-3xl font-bold">Mis compras</h1>
        <div className="flex-grow h-[1px] bg-[#430199]"></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {products.map((p) => (
          <ProductOrder
            name={p.name}
            desc={p.descripcion}
            fecha={p.fecha}
            imagen={p.imagen}
          />
        ))}
      </div>
    </div>
  )
}

export default OrderHistory
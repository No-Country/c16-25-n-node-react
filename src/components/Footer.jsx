import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactInfo from "./footer/ContactInfo";
import PayMethods from "./footer/PayMethods";


function Footer() {
  return (
    <>
      <footer className="bg-[#430199] w-full text-white md:px-16 px-8 py-5 ">
        <div className="flex justify-between md:flex-row flex-col">
          <ContactInfo className='flex flex-col' />
          <div className="md:m-0 mb-3">
            <p className="font-semibold text-sm">¡BIENVENIDOS!</p>
            <p className="text-sm">Somos una tienda de productos geek <br /> para la decoración del hogar.</p>
            <div className="flex justify-center my-2">
              <FaInstagram size='1.2em' className="mx-1" />
              <FaFacebook size='1.2em' className="mx-1" />
            </div>
          </div>
          <PayMethods />
        </div>
      </footer>
    </>
  )
}

export default Footer
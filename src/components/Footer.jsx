import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactInfo from "./footer/ContactInfo";
import PayMethods from "./footer/PayMethods";


function Footer() {
  return (
    <>
      <footer className="bg-[#430199] w-full  px-16 py-5">
        <div className="flex justify-between">
          <ContactInfo className='flex flex-col' />
          <div className="">
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
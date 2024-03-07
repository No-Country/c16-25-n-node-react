import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactInfo from "./footer/ContactInfo";
import PayMethods from "./footer/PayMethods";


function Footer() {
  return (
    <>
      <footer className="bg-[#430199] w-full text-white mt-8 px-8 py-5 ">
        <div className="flex justify-between w-11/12 mx-auto md:flex-row flex-col">
          <ContactInfo />
          <div className="md:m-0 mb-3 md:w-1/4 w-auto m-auto self-center">
            <p className="font-semibold text-sm">¡BIENVENIDOS!</p>
            <p className="text-sm">Somos una tienda de productos geek <br /> para la decoración del hogar.</p>
            <div className="flex justify-center my-2">
              <a className='text-white' href="">
                <FaInstagram size='1.2em' className="mx-1" />
              </a>
              <a className='text-white' href=''>
                <FaFacebook size='1.2em' className="mx-1" />
              </a>
            </div>
          </div>
          <PayMethods />
        </div>
      </footer>
    </>
  )
}

export default Footer
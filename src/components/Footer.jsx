import { FaFacebook, FaInstagram } from "react-icons/fa";
import ContactInfo from "./footer/ContactInfo";
import PayMethods from "./footer/PayMethods";


function Footer() {
  return (
    <>
      <footer className="bg-[#430199] relative flex bottom-0 h-60 w-full md:h-40">
        <ContactInfo className='flex flex-col' />

        <p>¡BIENVENIDOS!</p>
        <p>Somos una tienda de productos geek <br/> para la decoración del hogar.</p>
        <FaFacebook />
        <FaInstagram />

        <PayMethods />

      </footer>
      {/* <footer className="bg-white h-60 w-full md:h-40">
        <div className="container px-6 mx-auto justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="max-w-md mx-auto mt-4 text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <hr className="my-5 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-black">© Copyright 2024. All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <FaFacebook href="#" className="text-2xl mx-2  text-black transition-colors duration-300 cursor-pointer" aria-label="Facebook" />

              <FaInstagram href="#" className="text-2xl mx-2  text-black transition-colors duration-300 cursor-pointer" aria-label="Instagram" />

              <FaTwitter href="#" className="text-2xl mx-2  text-black transition-colors duration-300 cursor-pointer" aria-label="Twitter" />

              <FaGithub href="#" className="text-2xl mx-2 text-black transition-colors duration-300 cursor-pointer" aria-label="Github" />
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Footer
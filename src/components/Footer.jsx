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
    {/*<footer className="bg-white h-40 bottom-0 w-full">
      <div className="container px-6 py-8 mx-auto justify-center">
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

            <FaGithub href="#" className="text-2xl mx-2 text-black transition-colors duration-300 cursor-pointer" aria-label="Github" />*/}
          </div>
          <PayMethods />
        </div>
      </footer>
    </>
  )
}

export default Footer
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white absolute bottom-0 w-full">
      <div className="container px-6 py-8 mx-auto justify-center">
        <div className="flex flex-col items-center text-center">
          <p className="max-w-md mx-auto mt-4 text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-black">© Copyright 2024. All Rights Reserved.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <FaFacebook href="#" className="text-2xl mx-2  text-black transition-colors duration-300 hover:text-gray-600" aria-label="Reddit" />

            <FaInstagram href="#" className="text-2xl mx-2  text-black transition-colors duration-300 hover:text-gray-600" aria-label="Reddit" />

            <FaTwitter href="#" className="text-2xl mx-2  text-black transition-colors duration-300 hover:text-gray-600" aria-label="Reddit" />

            <FaGithub href="#" className="text-2xl mx-2 text-black transition-colors duration-300 hover:text-gray-600" aria-label="Reddit" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
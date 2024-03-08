import { useState } from "react";
import { Link } from "wouter";
import cartIcon from "../assets/cart_icon.svg";
import userIcon from "../assets/user_icon.svg";
import logo from "../assets/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-col sticky top-0 h-[5rem] min-w-[400px] z-50 items-center text-[#430199] bg-white border-b border-slate-200">
      <div className="flex flex-row justify-between w-10/12 my-6">
        <Link href="/">
          <img src={logo} className="h-12" />
        </Link>

        <div className="flex items-center justify-between space-x-4">
          {user ?
            (
              <div className="relative text-[#430199]" onMouseEnter={handleMouseEnter}>
                <div className="flex items-center justify-between space-x-4 cursor-pointer" onClick={toggleDropdown}>
                  <img src={userIcon} className="" />
                  {user && <span> {user.email} </span>}
                </div>
                {isOpen && (
                  <div className="absolute right-0 z-60 mt-2 w-48 bg-white shadow-lg animate-fadeIn text-[#430199]" onClick={toggleDropdown} onMouseLeave={handleMouseLeave}>
                    <Link
                      href="/orderhistory"
                      className="block px-4 py-2  hover:bg-gray-200"
                    >
                      Mis Compras
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2  hover:bg-gray-200"
                      onClick={() => auth.signOut()}
                    >
                      Cerrar Sesión
                    </Link>
                  </div>
                )}
              </div>
            )
            :
            (
              <Link href="/login">
                <img src={userIcon} className="" />
              </Link>
            )
          }
          <Link href="/cart">
            <img src={cartIcon} className="" />
          </Link>
        </div>
      </div>
      </nav>
  );
};

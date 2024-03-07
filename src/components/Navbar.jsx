import { useContext, useEffect, useState } from "react";
import { Link } from "wouter";
import Select from "react-select";
import searchIcon from "../assets/search_icon.svg";
import cartIcon from "../assets/cart_icon.svg";
import userIcon from "../assets/user_icon.svg";
import logo from "../assets/logo.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ProductsContext } from "../context/ProductsContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Todas");
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const { filterBySearch, filterByCategory } = useContext(ProductsContext);


  useEffect(() => {
    //Gets the dinamically generated categories from Firebase
    const cats = collection(db, 'categorias');
    getDocs(cats)
      .then(res => {
        let cats = res.docs.map(e => {
          return { label: e.data().categoria, value: e.data().categoria }
        })
        setCategories(cats)
      })
  }, []);

  useEffect(() => {
    filterByCategory(category);
  }, [category]);

  useEffect(() => {
    setTimeout(() => filterBySearch(category, searchText), 100);
  }, [searchText, category]);

  const onChangeSelect = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const handleChangeInput = (e) => {
    setTimeout(() => {
      const target = e.target;
      setSearchText(target.value);
    }, 300);
  };

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
    <nav className="flex flex-col sticky top-0 z-50 items-center text-[#430199] h-36 bg-white border-b border-slate-200">
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
                  <div className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg animate-fadeIn text-[#430199]" onClick={toggleDropdown} onMouseLeave={handleMouseLeave}>
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

      <div className="flex justify-center w-full bg-[#F3F2F5] h-12">
        <div className="flex flex-row justify-between w-10/12">
          <div className="flex items-center ">
            <Select
              options={[...categories, { label: "Todas", value: "Todas" }]}
              onChange={onChangeSelect}
              placeholder="Categoría"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#7A1AFF",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#A599FE", // Background hover opción
                  primary: "#7A1AFF", // Borde Pressed y bg selected option
                  neutral80: "#F5F5F5", // Hover del chevron
                  neutral60: "#F5F5F5", // Normal del chevron
                  neutral50: "#F5F5F5", // Normal Letra placeholder
                  neutral0: "#F5F5F5", // Background opcion
                },
              })}
            />
          </div>
          <div className="flex items-center justify-between bg-[#BDB5F9] rounded-xl p-2 w-1/4">
            <input
              className="mx-4 w-4/5 outline-none bg-[#BDB5F9]"
              placeholder=""
              type="text"
              onChange={handleChangeInput}
            />
            <img src={searchIcon} className="mx-2" />
          </div>
        </div>
        <div className="flex justify-between">
        </div>
      </div>
    </nav>
  );
};

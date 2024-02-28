import React, { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRobot, FaJedi, FaGamepad, FaShoppingCart } from "react-icons/fa";
import { Link } from "wouter";
import Select from "react-select";
import searchIcon from "../assets/search_icon.svg";
import cartIcon from "../assets/cart_icon.svg";
import userIcon from "../assets/user_icon.svg";
import logo from "../assets/logo.png";
import { ProductsContext } from "../context/ProductsContext";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Todas");

  const { filterBySearch, filterByCategory } = useContext(ProductsContext);

  const categoryOptions = [
    { label: "Todas", value: "Todas" },
    { label: "Cocina", value: "Cocina" },
    { label: "Muebles", value: "Muebles" },
    { label: "Otro", value: "Otro" },
  ];

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

  return (
    <nav className="flex flex-col items-center text-[#430199] h-36 bg-white"> {/* w-dvw */}
      <div className="flex flex-row justify-between w-10/12 my-6">
        <Link href="/">
          <img src={logo} className="h-12" />
        </Link>

        <div className="flex items-center justify-around w-1/12">
          <Link href="/login">
            <img src={userIcon} className="" />
          </Link>
          <Link href="/cart">
            <img src={cartIcon} className="" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center w-full bg-[#F3F2F5] h-12">
        <div className="flex flex-row justify-between w-10/12">
          <div className="flex items-center ">
            <Select
              options={categoryOptions}
              onChange={onChangeSelect}
              placeholder="Categoria"
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
                  primary: "none", // Borde Pressed
                  neutral80: "#F5F5F5", // Hover del chevron
                  neutral60: "#F5F5F5", // Normal del chevron
                  neutral50: "#F5F5F5", // Normal Letra
                  neutral40: "#F5F5F5", // Hover del chevron
                  neutral30: "#F5F5F5", // Hover del borde externo
                  neutral20: "none", // Bordes de todo menos letra
                  neutral0: "#F5F5F5", // Background opciones
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

import React, { useContext, useEffect, useState } from "react";
import { Link } from "wouter";
import Select from "react-select";
import searchIcon from "../assets/search_icon.svg";
import cartIcon from "../assets/cart_icon.svg";
import userIcon from "../assets/user_icon.svg";
import logo from "../assets/logo.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ProductsContext } from "../context/ProductsContext";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("Todas");
  const [categories, setCategories] = useState([]);

  const { filterBySearch, filterByCategory } = useContext(ProductsContext);


  useEffect(() => {
    //Gets the dinamically generated categories from Firebase
    const cats = collection(db, 'categorias');
    getDocs(cats)
      .then(res => {
        let cats = res.docs.map(e => {
          return { label: e.data().categoria, value: e.data().categoria }
        })
        console.log(cats)
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

  return (
    <nav className="flex flex-col items-center text-[#430199] h-36 bg-white">
      <div className="flex flex-row justify-between w-10/12 my-6">
        <Link href="/">
          <img src={logo} className="h-12" />
        </Link>

        <div className="flex items-center justify-between space-x-4">
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
              options={categories}
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
                  primary: "#F5F5F5", // Borde Pressed
                  neutral80: "#F5F5F5", // Hover del chevron
                  neutral60: "#F5F5F5", // Normal del chevron
                  neutral50: "#F5F5F5", // Normal Letra
                  neutral40: "#F5F5F5", // Hover del chevron
                  neutral30: "#F5F5F5", // Hover del borde externo
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

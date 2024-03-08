import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import searchIcon from "../assets/search_icon.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ProductsContext } from "../context/ProductsContext";


function FilterNav () {
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

      const handleSubmit = (event) => {
        event.preventDefault()
      }
    


    return (
        <div className="flex fixed z-10 justify-center w-full bg-[#F3F2F5] h-12">
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
          <div className="flex items-center justify-between bg-[#BDB5F9] rounded-xl m-1 p-2 min-w-[140px] w-1/3">
          <form className="items-center flex content center" onSubmit={handleSubmit}>
            <input
              className="mx-4 w-4/5 outline-none bg-[#BDB5F9]"
              placeholder=""
              type="text"
              onChange={handleChangeInput}
            />
            <button className="" type='submit'>
             <img src={searchIcon} className="mx-2" />

            </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between">
        </div>
      </div>

    )
}
export default FilterNav
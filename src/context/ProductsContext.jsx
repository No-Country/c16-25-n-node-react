import { createContext, useState } from "react";

const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsProvider = ({ children }) => {
  const [allProducts, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleInitializeProducts = (newProducts) => {
    const newProductsCopy = [].concat(newProducts)
    setProducts(newProductsCopy)
    setFilteredProducts(newProductsCopy)
  }

  const handleFilterByCategory = (category) => {
    let newFilteredProducts = [].concat(allProducts)
    if (category && category !== "Todas") {
      newFilteredProducts = newFilteredProducts.filter(
        (p) => p.categoria === category
      )
    }
    setFilteredProducts(newFilteredProducts)
  };

  const handleFilterBySearch = (category, searchText) => {
    let newFilteredProducts
    newFilteredProducts = [...allProducts]
    if (category && category !== 'Todas') {
      newFilteredProducts = newFilteredProducts.filter((p) => p.categoria === category);
    }
    if (searchText && searchText.trim() !== '') {
      newFilteredProducts = newFilteredProducts.filter((p) => {
        return (p.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
          p.descripcion.toLowerCase().includes(searchText.toLowerCase()))
      })
    }
    setFilteredProducts(newFilteredProducts)
  };

  const handleFilterByThemeAndPrice = (checkedThemes, filtersTheme, checkedPrices, filtersPrice) => {
    let newFilteredProducts = [...allProducts]
    let otherProducts = []
    let selectedThemes = []
    //funcionalidad theme
    checkedThemes.forEach((theme, index) => {
      if (theme) {
        selectedThemes.push(filtersTheme.at(index))
      }
    })
    if (selectedThemes.includes("Otros")) {
      let allThemes = [...filtersTheme]
      allThemes.pop()
      otherProducts = newFilteredProducts.filter((p) => !(allThemes.includes(p.tema)))
    }
    if (selectedThemes.length !== 0) {
      newFilteredProducts = newFilteredProducts.filter((p) => (selectedThemes.includes(p.tema)))
    }
    newFilteredProducts = newFilteredProducts.concat(otherProducts)
    //funcionalidad price
    let i = checkedPrices.findIndex((p) => p)
    if (i !== -1) {
      newFilteredProducts = newFilteredProducts.filter((p) => (p.precio <= filtersPrice.at(i).max && p.precio >= filtersPrice.at(i).min))
    }
    setFilteredProducts(newFilteredProducts)
  }

  return (
    <ProductsContext.Provider
      value={{ allProducts, filteredProducts, initializeProducts: handleInitializeProducts, filterBySearch: handleFilterBySearch, filterByCategory: handleFilterByCategory, filterByThemeAndPrice: handleFilterByThemeAndPrice }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
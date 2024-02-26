//Busqueda

  //productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(products)
  //useEffect busqueda
  useEffect(() => {

    const searchProducts = () => {
      let newFilteredProducts = filteredProducts
      if (searchText && searchText.trim() !== '') {
        newFilteredProducts = newFilteredProducts.filter((p) => {
          if (searchText && p.descripcion.toString().toLowerCase().indexOf(searchText) > 1
            || p.nombre.toString().toLowerCase().indexOf(searchText) > 1) {
            return p
          }
        })
      }
      
      setFilteredProducts(newFilteredProducts)
    }
    searchProducts()

    return () => {
      setFilteredProducts([].concat(filteredProducts))
    }
  }, [searchText]);

  //filtrado por categoria:
  const categorias = [
    'Cocina',
    'Muebles'
  ]
  useEffect(() => {

    const filterProducts = () => {
      let newFilteredProducts = [].concat(filteredProducts)
      if (category) {
        categorias.forEach((cat) => {
          if (category.toString().trim() === cat) {
            newFilteredProducts = filteredProducts.filter((p) => p.categoria === cat)
          }
        })

      }
      setFilteredProducts(newFilteredProducts)
    }
    filterProducts()

    // return () => {
    //   setFilteredProducts([].concat(products))
    // }
  }, [category]);

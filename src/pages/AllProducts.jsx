import ProductsFilters from "../components/AllProducts/ProductsFilters"
import ProductsGrid from "../components/AllProducts/ProductsGrid"
import { useContext, useState } from "react"
import { ProductsContext } from "../context/ProductsContext"
import TitleLine from "../components/AllProducts/TitleLine"

function AllProducts() {
  const { allProducts, filteredProducts } = useContext(ProductsContext)
  const [selectedFilters, setSelectedFilters] = useState([])


  return (
    <div>
      <div className="mx-36 mb-8">
        <TitleLine
          title={"LÁMPARAS"}
        />
      </div>
      <div className="flex ml-[5%]">
        <aside>
          <ProductsFilters />
        </aside>
        <main className="ml-10">
          <ProductsGrid
            products={filteredProducts}
          />
        </main>
      </div>
    </div>
  )
}

export default AllProducts
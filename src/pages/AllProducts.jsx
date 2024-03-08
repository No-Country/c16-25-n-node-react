import ProductsFilters from "../components/AllProducts/ProductsFilters"
import ProductsGrid from "../components/AllProducts/ProductsGrid"
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import TitleLine from "../components/AllProducts/TitleLine"

function AllProducts() {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <div className="">
      <div className="mx-36">
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
import ProductsFilters from "../components/AllProducts/ProductsFilters"
import ProductsGrid from "../components/AllProducts/ProductsGrid"
import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import TitleLine from "../components/AllProducts/TitleLine"
import FilterNav from "../components/FilterNav"

function AllProducts() {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <>
      <FilterNav />
      <div className="mt-12">

        <div className="mx-36">
          <TitleLine
            title={"PRODUCTOS"}
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
    </>
  )
}

export default AllProducts
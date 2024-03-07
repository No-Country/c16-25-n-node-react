import filterSvg from "../../assets/filter.svg"

import AccordionFilter from "./AccordionFilter"
import { filtersTheme, filtersPrice } from "../../assets/filtersData/filtersData"
import { useContext, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"


function ProductsFilters() {
  const {filterByThemeAndPrice} = useContext(ProductsContext)
  const [ checkedList, setCheckedList ] = useState(
    {
      checkedThemes:new Array(filtersTheme.length).fill(false),
      checkedPrices:new Array(filtersPrice.length).fill(false)
    }
  )

  const handleChangeThemeFilters = (i) => {
    let newCheckedList = {...checkedList}
    newCheckedList.checkedThemes[i] = !newCheckedList.checkedThemes[i]
    setCheckedList(newCheckedList)
  }

  const handleChangePriceFilters = (i) => {
    let newCheckedList = {...checkedList}
    newCheckedList.checkedPrices = new Array(filtersPrice.length).fill(false)
    newCheckedList.checkedPrices[i] = !newCheckedList.checkedPrices[i]
    setCheckedList(newCheckedList)
  }

  const handleClick = () =>{
    filterByThemeAndPrice(checkedList.checkedThemes, filtersTheme, checkedList.checkedPrices, filtersPrice)
  }

  return (
    <div className='w-44 text-sm text-[#430199] font-semibold m-4'>
      <div>
        <div className='flex justify-between text-lg mb-8 '><img src={filterSvg} /><span>FILTROS</span></div>
      </div>
      <AccordionFilter
        title={'Tema'}
        list={filtersTheme}
        handleChange={handleChangeThemeFilters}
        type={"checkbox"}
      />
      <AccordionFilter
        title={'Precio'}
        list={filtersPrice.map((elem)=>(elem.text))}
        handleChange={handleChangePriceFilters}
        type={"radio"}
      />
      <div className='mb-4'>
        <button onClick={handleClick} className='text-xs text-white font-medium px-6 py-1 rounded-md bg-[#430199]'>Aplicar filtro</button>
      </div>
    </div>
  )
}

export default ProductsFilters
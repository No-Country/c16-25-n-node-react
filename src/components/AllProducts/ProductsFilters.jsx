import filterSvg from "../../assets/filter.svg"

import AccordionFilter from "./AccordionFilter"
import { filtersTheme, filtersPrice } from "../../assets/filtersData/filtersData"
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"


function ProductsFilters({selectedFilters}) {
  const {filterByPrice, filterByTheme} = useContext(ProductsContext)
  const [ checkedList, setCheckedList ] = useState(
    {
      checkedThemes:new Array(filtersTheme.length).fill(false),
      checkedPrices:new Array(filtersPrice.length).fill(false)
    }
  )
  useEffect(()=>{
    filterByTheme(checkedList.checkedThemes, filtersTheme)
    filterByPrice(checkedList.checkedPrices, filtersPrice)
  }, [ checkedList ])

  const handleChangeFilters = (i) => {
    let newCheckedList = [...checkedList]
    newCheckedList[i] = !newCheckedList[i]
    setCheckedList(newCheckedList)
  }

  return (
    <div className='w-44 text-sm text-[#430199] font-semibold m-4'>
      <div>
        <div className='flex justify-between text-lg mb-8 '><img src={filterSvg} /><span>FILTROS</span></div>
      </div>
      <AccordionFilter
        title={'Tema'}
        list={filtersTheme}
        handleChange={handleChangeFilters}
        type={"checkbox"}
      />
      <AccordionFilter
        title={'Precio'}
        list={filtersPrice.map((elem)=>(elem.text))}
        handleChange={handleChangeFilters}
        type={"radio"}
      />
      <div className='mb-4'>
        <button className='text-xs text-white font-medium px-6 py-1 rounded-md bg-[#430199]'>Aplicar filtro</button>
      </div>
    </div>
  )
}

export default ProductsFilters
import React, { useContext, useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRobot, FaJedi, FaGamepad, FaShoppingCart } from "react-icons/fa";
import { Link } from 'wouter';
import SearchInput from './SearchInput';
import Select from 'react-select';
import { ProductsContext } from "../context/ProductsContext";



export const Navbar = () => {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('Todas')

  const { filterBySearch, filterByCategory } = useContext(ProductsContext)

  const categoryOptions =
    [
      { label: 'Todas', value: 'Todas' },
      { label: 'Cocina', value: 'Cocina' },
      { label: 'Muebles', value: 'Muebles' },
    ];

  useEffect(() => {
    filterByCategory(category)
    // return(
    //   filterByCategory('Todas')
    // )
  }, [category])

  useEffect(() => {
    filterBySearch(category, searchText)
    // return(
    //   filterByCategory('Todas')
    // )
  }, [searchText,category])
  
  const onChangeSelect = (selectedOption) => {
    setCategory(selectedOption.value)
  }

  const handleChangeInput = (e) => {
    // setTimeout(() => {
    const target = e.target
    setSearchText(target.value)
    // }, 500)
  }

  return (
    <nav className='flex align-middle justify-between items-center text-gray-400 w-screen h-12 bg-white'>
      <div className='w-1/5'>
        <span className='flex justify-around mx-20'>
          <FaRobot className='text-2xl' />
          <FaJedi className='text-2xl' />
          <FaGamepad className='text-2xl' />
        </span>
      </div>
      <div className='flex w-2/5 justify-around'>
        <span>Cat 1</span>
        <span>Cat 2</span>
        <span>Cat 3</span>

        {/* Select de categorias para probar el filtrado */}
        <div>
          <Select
            options={categoryOptions}
            onChange={onChangeSelect}
            placeholder='Todas'
          />
        </div>

      </div>
      <div className='flex items-center w-2/5 mx-aut justify-around content-end'>
        <div className='flex bg-white border-gray-400 border-2 rounded-2xl'>
          <span>
            <IoSearch className='p-2 text-4xl fill-slate-400' />
          </span>


          {/* <SearchInput
            
            placeholder="Search..."
            type="text"
            
            
             
          /> */}
          <input className='mx-3 bg-white outline-none' placeholder="Search..." type="text" onChange={handleChangeInput} />

        </div>
        <div className='flex justify-between'>
          <FaShoppingCart className='text-2xl mx-2' />
          <FaRegUser className='text-2xl mx-2' />
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </div>
      </div>
    </nav>
  )
}
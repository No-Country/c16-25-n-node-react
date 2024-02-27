import React from 'react'
import { Link } from 'wouter';
import SearchInput from './SearchInput';
import Select from 'react-select';
import searchIcon from '../assets/search_icon.svg'
import cartIcon from '../assets/cart_icon.svg'
import userIcon from '../assets/user_icon.svg'
import logo from '../assets/logo.png'



export const Navbar = ({ setSearchText, products, setCategory }) => {


  const categoryOptions =
    [
      { label: 'Todas', value: 'Todas' },
      { label: 'Cocina', value: 'Cocina' },
      { label: 'Muebles', value: 'Muebles' },
    ];
  const onChange = (selectedOption) => {
    setCategory(selectedOption.value)
  }

  return (
    <nav className='flex flex-col items-center text-[#430199] w-screen h-36 bg-white'>
      <div className='flex flex-row justify-between w-10/12 my-6'>
        <Link href='/'>
          <img src={logo} className='h-12' />
        </Link>

        <div className='flex items-center justify-around w-1/12'>
          <Link href='/login'>
            <img src={userIcon} className='' />
          </Link>
          <Link href='/cart'>
            <img src={cartIcon} className='' />
          </Link>
        </div>
      </div>

      <div className='flex justify-center w-full bg-[#F3F2F5] h-12'>
        <div className='flex flex-row justify-between w-10/12'>
          <div className='flex items-center '>
            <Select
              options={categoryOptions}
              onChange={onChange}
              placeholder='Categoria'
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: '#7A1AFF',
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#A599FE', // Background hover opción
                  primary: 'none', // Borde Pressed
                  neutral80: '#F5F5F5', // Hover del chevron
                  neutral60: '#F5F5F5', // Normal del chevron
                  neutral50: '#F5F5F5', // Normal Letra
                  neutral40: '#F5F5F5', // Hover del chevron
                  neutral30: '#F5F5F5', // Hover del borde externo
                  neutral20: 'none', // Bordes de todo menos letra
                  neutral0: '#F5F5F5' // Background opciones
                },
              })
              }
            />
          </div>
          <div className='flex items-center justify-between bg-[#BDB5F9] rounded-xl p-2 w-1/4'>
            <SearchInput
              placeholder=""
              type="text"
              setSearchText={setSearchText}
            />
            <img src={searchIcon} className='mx-2' />
          </div>
        </div>
      </div>
    </nav>
  )
}
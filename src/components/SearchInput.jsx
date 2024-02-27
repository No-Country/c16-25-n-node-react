// import { useState, useEffect } from "react"

function SearchInput({ placeholder, type, setSearchText }) {

  const handleChange = (e) => {
    const target = e.target
    setSearchText(target.value)
  }
  return (
    <input className="bg-[#BDB5F9] fill-[#BDB5F9] outline-none w-3/4" placeholder={placeholder} type={type} onChange={handleChange} />
  )
}

export default SearchInput
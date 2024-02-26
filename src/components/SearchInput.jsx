// import { useState, useEffect } from "react"

function SearchInput({placeholder, type, setSearchText}) {
  
  const handleChange = (e) => {
    const target = e.target
    setSearchText(target.value)
  }
  return (
    <input placeholder={placeholder} type={type} onChange={handleChange} />
  )
}

export default SearchInput
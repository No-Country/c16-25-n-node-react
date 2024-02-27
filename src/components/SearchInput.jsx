// import { useState, useEffect } from "react"

function SearchInput({ placeholder, type, setSearchText, filterBySearch, category }) {

  const handleChange = (e) => {
    // setTimeout(() => {
      const target = e.target
      setSearchText(target.value)
      filterBySearch(category,target.value)
    // }, 500)
  }
  return (
    <input placeholder={placeholder} type={type} onChange={handleChange} />
  )
}

export default SearchInput
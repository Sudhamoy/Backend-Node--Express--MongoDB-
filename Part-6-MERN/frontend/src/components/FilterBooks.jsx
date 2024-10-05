/* eslint-disable react/prop-types */
import { useState } from "react"

const FilterBooks = ({FilterBooks}) => {
  const [search, setSearch] = useState("");

  const handleFilter=(e)=>{
    setSearch(e.target.value)
    FilterBooks(e.target.value)
  }

  return (
    <div>
      <h2>Filter Books</h2>
      <input type="text" value={search} onChange={handleFilter} placeholder="Search books"/>
      {/* Search by title here */}
    </div>
  )
}

export default FilterBooks

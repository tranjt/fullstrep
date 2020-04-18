import React from 'react'

const CountriesFilter = ({ countriesFilter, setCountriesFilter }) => {
  const handleFilterChange = (event) => setCountriesFilter(event.target.value)

  return (
    <div>
      Find countries <input
        value={countriesFilter}
        onChange={handleFilterChange} />
    </div>
  )
}

export default CountriesFilter

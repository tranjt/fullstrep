import React from 'react'
import Country from './Country'

const Countries = ({ countries, setCountriesFilter }) => {
    const selectCountry = (countryName) => {
      return () => setCountriesFilter(countryName)
    }
  
    if (countries.length > 10) {
      return (
        <div>
          Too many matches, specify another filter.
        </div>
      )
    }
  
    if (countries.length === 1) {
      return (
        <Country country={countries[0]} />
      )
    }
  
    return (
      countries.map(country => {
        return <div key={country.name}>
          {country.name}
          <button onClick={selectCountry(country.name)}>show</button>
        </div>
      })
    )
  }

  export default Countries
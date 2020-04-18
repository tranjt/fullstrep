import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountriesFilter from './components/CountriesFilter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  let filteredCountries = countries
    .filter(country =>
      country.name.toLocaleLowerCase().includes(countriesFilter.toLocaleLowerCase()))

  return (
    <div >
      <CountriesFilter
        countriesFilter={countriesFilter}
        setCountriesFilter={setCountriesFilter} />
      <Countries
        countries={filteredCountries}
        setCountriesFilter={setCountriesFilter} />
    </div>
  );
}

export default App;

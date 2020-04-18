import React from 'react'
import CityWeather from './CityWeather'

const Country = ({ country }) => {

  const languagues = country.languages
    .map(language =>
      <li key={language.name}>{language.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        Capital: {country.capital}
      </div>
      <div>
        Population: {country.population}
      </div>
      <h2>Languagues</h2>
      <ul>
        {languagues}
      </ul>
      <img
        src={country.flag}
        width="200px"
        height="100px"
        alt="No country flag found" />
      <CityWeather city={country.capital} />
    </div>
  )
}

export default Country
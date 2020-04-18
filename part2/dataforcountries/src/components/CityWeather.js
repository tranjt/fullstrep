import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CityWeather = ({ city }) => {
  const [cityWeather, setCityWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  const weatherURL = `http://api.weatherstack.com/forecast?access_key=${api_key}&query=${city}`

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
  }

  useEffect(() => {
    axios
      .get(weatherURL)
      .then(response => setCityWeather(response.data))
  }, [weatherURL])

  if (isEmpty(cityWeather) || cityWeather.current === undefined) {
    return (
      <div>
        <h2>Weather in {city}</h2>
        not available
      </div>
    )
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>
        <b>Temperature:</b> {cityWeather.current.temperature} celcius
      </div>
      <img
        src={cityWeather.current.weather_icons[0]}
        width="50px"
        height="50px"
        alt="No weather icon found" />
      <div>
        <b>Wind:</b> {cityWeather.current.wind_speed} kmph direction {cityWeather.current.wind_dir}
      </div>
    </div>
  )

}

export default CityWeather
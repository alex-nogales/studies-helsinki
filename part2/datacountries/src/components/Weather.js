import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ( {country} ) => {
    const [ weather, setWeather ] = useState(null)
  
    useEffect(() => {
      const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country[0].capital
      }
  
      axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => setWeather(response.data.current) )
      .catch(error => console.log('error: ', error))
    }, [country])
  
  
    return (
      <div>
        <h1>Weather in {country[0].capital}</h1>
        {
          weather ?
          <>
            <p><strong>Temperature: </strong>{weather.temperature}</p>
            <img src={weather.weather_icons[0]} alt='Weather'/>
            <p><strong>Wind:</strong> {weather.wind_speed} kmph direction {weather.wind_dir}</p>
          </>
          :
          <p>loading data...</p>
        }
      </div>
    )
  }

export default Weather
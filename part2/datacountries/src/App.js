import React, {useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ( {countrySearch, setCountrySearch} ) => {
  return ( 
    <input value={countrySearch} onChange={event => setCountrySearch(event.target.value)} />
  )
}

const CountryDisplay = ({ filter }) => {
  return (
    filter.map(value =>
      <div key={value.numericCode}>
       <h1>{value.name}</h1> 
       <p>Capital: {value.capital}</p>
        <p>Population: {value.population}</p>
       <h2> Languages </h2>
       {value.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
       <h2> Flag </h2>
       <img src={value.flag} alt="Flag of the country you selected" style={{width: 150, height: 150}}/>
       <Weather country={filter} />
      </div>
    ) 
  ) 
}
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

  console.log('weather: ', weather)

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

const CountryData = ( {country, countrySearch, setCountrySearch} ) => {
  const filter = country.filter(value => value.name.toLowerCase().includes(countrySearch.toLowerCase()))

  if (filter.length > 10) {
    return (
      <p>Too many matches</p>
    )
  } else if (filter.length === 1) {
    return (
      CountryDisplay({filter})
    )
  } else {
    return (
      filter.map((value, index) =>
        <div key={index}>
          <>{value.name} </> <button onClick={() => setCountrySearch(value.name)}>show</button><br />
        </div>
      )
    )

  }

  
}


const App = () => {
  const [ country, setCountry ] = useState([])
  const [ countrySearch, setCountrySearch ] = useState('')

  const fetchData = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(results => setCountry(results.data))
  }
  useEffect(fetchData, [])

  //console.log(process.env.REACT_APP_API_KEY)

  return (
    <div>
      <h1>Country Search!</h1>
      <Filter countrySearch={countrySearch} setCountrySearch={setCountrySearch} />
      <CountryData country={country} countrySearch={countrySearch} setCountrySearch={setCountrySearch} />
    </div>
  )
}

export default App
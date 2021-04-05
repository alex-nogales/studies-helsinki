import React, {useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ( {countrySearch, setCountrySearch} ) => {
  return ( 
    <input value={countrySearch} onChange={event => setCountrySearch(event.target.value)} />
  )
}

const CountryData = ( {country, countrySearch} ) => {
  const output = country.filter(value => value.name.toLowerCase().includes(countrySearch.toLowerCase()))

  if (output.length > 10) {
    return (
      <p>Too many matches</p>
    )
  } else if (output.length === 1) {
    return (
      output.map(value =>
        <div key={value.numericCode}>
         <h1>
            {value.name}
         </h1> 
         <p>
           Capital: {value.capital}<br />
           Population: {value.population}
         </p>
         <h2>
           Languages
         </h2>
         {value.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
         <h2>
           Flag
         </h2>
         <img src={value.flag} alt="Flag of the country you selected" />
        </div>
      ) 
    )
  } else {
    return (
      output.map((value, index) =>
        <div key={index}>
        <>{value.name} <br /></>
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

  return (
    <div>
      <h1>Country Search!</h1>
      <Filter countrySearch={countrySearch} setCountrySearch={setCountrySearch} />
      <CountryData country={country} countrySearch={countrySearch} />
    </div>
  )
}

export default App
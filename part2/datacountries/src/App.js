import React, {useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountryData from './components/CountryData'

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
      <CountryData country={country} countrySearch={countrySearch} setCountrySearch={setCountrySearch} />
    </div>
  )
}

export default App
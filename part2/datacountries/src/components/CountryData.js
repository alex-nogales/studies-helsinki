import React from 'react'

import CountryDisplay from './CountryDisplay'


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

export default CountryData
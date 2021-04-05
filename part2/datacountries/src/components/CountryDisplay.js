import React from 'react'

import Weather from './Weather'

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

export default CountryDisplay
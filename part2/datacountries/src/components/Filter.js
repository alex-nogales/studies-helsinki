import React from 'react'

const Filter = ( {countrySearch, setCountrySearch} ) => {
    // Creates the input for filtering country
    return ( 
      <input value={countrySearch} onChange={event => setCountrySearch(event.target.value)} />
    )
  }

export default Filter
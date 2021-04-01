import React from 'react'

const Filter = ({searchName, setSearchName}) => {
    return (
        <input value={searchName} onChange={event => setSearchName(event.target.value)} />
    )
}

export default Filter
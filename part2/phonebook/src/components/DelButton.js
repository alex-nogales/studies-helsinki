import React from 'react'

import personsService from '../services/persons'

const confirmation = (id, name) => {
    if (window.confirm(`do you really want to remove ${name}?`)) {
        personsService.remove(id)
    }
}

const DelButton = ( {id, name} ) => {
    return (
        <button onClick={() => confirmation(id, name)}>del</button>
    )
}

export default DelButton
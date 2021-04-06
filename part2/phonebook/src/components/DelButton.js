import React from 'react'

import personsService from '../services/persons'

const confirmation = (id, name, setNotification) => {
    if (window.confirm(`do you really want to remove ${name}?`)) {
        personsService.remove(id)
            .catch(error => {
                setNotification(`information of ${name} has already been removed from the server`, 'error')
                setTimeout(() => setNotification(null), 5000)
            })
    }
}

const DelButton = ( {id, name} ) => {
    return (
        <button onClick={() => confirmation(id, name)}>del</button>
    )
}

export default DelButton
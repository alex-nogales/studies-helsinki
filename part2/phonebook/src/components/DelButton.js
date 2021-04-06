import React from 'react'

import personsService from '../services/persons'

const confirmation = (id, name, setNotificationMessage) => {
    if (window.confirm(`do you really want to remove ${name}?`)) {
        personsService.remove(id)
            .catch(error => {
                setNotificationMessage(`information of ${name} has already been removed from the server`)
                setTimeout(() => setNotificationMessage(null), 5000)
            })
    }
}

const DelButton = ( {id, name} ) => {
    return (
        <button onClick={() => confirmation(id, name)}>del</button>
    )
}

export default DelButton
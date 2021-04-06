import React from 'react'

import DelButton from './DelButton'

const Persons = ({persons, searchName, setNotification}) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(person =>
            <div key={person.name}> 
            <li>
                {person.name} {person.number} 
                <DelButton name={person.name} id={person.id} setNotification={setNotification} />
            </li>
            </div>
        )

    )
}

export default Persons
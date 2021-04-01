import React from 'react'

const Persons = ({persons, searchName}) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
        .map(person => 
            <li key={person.name}>
                {person.name} {person.number}
            </li>
        )

    )
}

export default Persons
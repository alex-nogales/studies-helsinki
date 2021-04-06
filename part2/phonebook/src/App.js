import React, { useEffect, useState } from 'react'

import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  })
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.find(person => person.name === newName)

    if (nameExists) {
      if (window.confirm(`${newName} is already added to phonebook, want update it with new number?`)) {
        const persona = persons.find(person => person.id === nameExists.id)
        const changedPerson = {...persona, number: newNumber}
        
        personsService
          .update(nameExists.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== nameExists.id ? person : returnedPerson))
            setNotificationMessage(`Modified ${newName} `)
            setTimeout(() => setNotificationMessage(null), 5000)
          })
      }

    } else {
      const personObject = { 
        name: newName,
        number: newNumber
      }
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationMessage(`Added ${newName}`)
          setTimeout(() => setNotificationMessage(null), 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h2>Add a new contact</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} 
                  setNotificationMessage={setNotificationMessage} />
      
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />

    </div>
  )
}
export default App
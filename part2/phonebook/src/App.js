import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')


  const getData = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }
  useEffect(getData, [])


  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.find(person => person.name === newName)

    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`)

    } else {
      const personObject = { 
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} setSearchName={setSearchName} />

      <h2>Add a new contact</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
      
    </div>
  )
}
export default App
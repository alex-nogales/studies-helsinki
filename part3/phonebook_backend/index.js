const express = require('express')
const app = express()

let persons = [ 
    {
        id: 1,
        name: "Alex Nogales",
        number: 123456
    },
    {
        id: 2,
        name: "Fabiola Concha",
        number: 43215
    },
    {
        id: 3,
        name: "Blitz Mithrandir",
        number: 666
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook on backend!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id )
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    timestamp = new Date()
    personLength = persons.length

    response.send(`<p>Phonebook has info of ${personLength} persons</p><p>${timestamp}</p>`)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log('App running on localhost:3001')
})
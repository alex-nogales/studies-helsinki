const express = require('express')
const app = express()

app.use(express.json())
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

//Utiities
const generateId = max => {
    return Math.floor(Math.random() * max)
}

//root
app.get('/', (request, response) => {
    response.send('<h1>Phonebook on backend!</h1>')
})

//api/persons
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

app.post('/api/persons', (request, response) => {
    const body = request.body
    const findPerson = persons.find(p => p.name === body.name)

    if (findPerson) {
        return response.status(400).json({
            error: 'this person already exists'
        })
    }

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name or number are missing!'
        })
    }
    const person = {
        id: generateId(1000),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.param.id)
    persons = persons.filter(p => p.id === id)

    response.status(204).end()
})

//info
app.get('/info', (request, response) => {
    timestamp = new Date()
    personLength = persons.length

    response.send(`<p>Phonebook has info of ${personLength} persons</p><p>${timestamp}</p>`)
})



const PORT = 3001
app.listen(PORT, () => {
    console.log('App running on localhost:3001')
})
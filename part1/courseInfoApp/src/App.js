import React from 'react'
/* The code goes from here... */
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part parts = {parts} />
    </div>
  )
}

const Part = ({parts, name, exercises}) => {
  return (
    <div>
      {parts.map((value, index) => <p key={index}> {value.name}  {value.exercises} </p> )}     
    </div>
  )
}

const Total = ({parts}) => {
  let sum = 0
  parts.forEach(value => {
    sum = sum + value.exercises
  })

  return(
    <div>
      <p>Number of excercises {sum}</p>
    </div>
  )
}

//<!-- Number of excercises {ex.exercises1 + ex.exercises2 + ex.exercises3} -->
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}


/* ... To here */ 
export default App
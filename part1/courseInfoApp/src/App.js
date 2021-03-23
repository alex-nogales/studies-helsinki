import React from 'react'
/* The code goes from here... */
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts = {props.parts} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.parts.map((value, index) => <p key={index}> {value.name}  {value.exercises} </p> )}     
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(value => {
    sum = sum + value.exercises
  })
  console.log(sum)
  return(
    <div>
      <p>Number of excercises {sum}</p>
    </div>
  )
}

//<!-- Number of excercises {ex.exercises1 + ex.exercises2 + ex.exercises3} -->
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
   
    </div>
  )
}


/* ... To here */ 
export default App
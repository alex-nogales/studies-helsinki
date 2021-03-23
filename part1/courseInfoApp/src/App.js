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
      <Part part1 = {props.part1} exercises1 = {props.exercises1}/>
      <Part part2 = {props.part2} exercises2 = {props.exercises2}/>
      <Part part3 = {props.part3} exercises3 = {props.exercises3}/>
    </div>
  )
}

const Part = (parts) => {
  return (
    <div>
      <p>{parts.part1} {parts.exercises1}</p>
      <p>{parts.part2} {parts.exercises2}</p>
      <p>{parts.part3} {parts.exercises3}</p>
    </div>
  )
}

const Total = (ex) => {
  return(
    <div>
      <p>Number of excercises {ex.exercises1 + ex.exercises2 + ex.exercises3} </p>
  </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
    </div>
  )
}
/* ... To here */ 
export default App
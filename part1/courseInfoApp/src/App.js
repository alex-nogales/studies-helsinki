import React from 'react'
/* The code goes from here... */
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
  </div>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}
/* ... To here */ 
export default App
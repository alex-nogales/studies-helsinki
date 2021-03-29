import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    const {name, parts}  = course
    const exercise = parts.map(part => part.exercises)
    console.log('ex', exercise)
  
    return (
      <div>
        <Header course = {name} />
        <Content parts = {parts} />
        <Total exercises = {exercise} />
      </div>
    )
  }

export default Course
import React from 'react'

const Part = ({parts}) => {
    const { name, exercises } = parts
    return <p> {name} {exercises} </p> 
  
  }

export default Part
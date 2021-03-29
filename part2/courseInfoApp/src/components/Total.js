import React from "react"

const Total = ({exercises}) => {
    const sumEx = exercises.reduce((sum, exercise) => sum + exercise, 0)
    return <strong>Number of exercises {sumEx} </strong>
  }

export default Total
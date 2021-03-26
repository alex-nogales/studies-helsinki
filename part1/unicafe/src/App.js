import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statics = (props) => {
  const {text, value} = props
  return (
    <table>
      <tbody>
        <tr>
          <td>{text} {value}</td>
        </tr>
      </tbody>
    </table>

  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good !== 0 || neutral !== 0 || bad !== 0 ){
    return ( 
      <div>
        <Statics text='good' value={good} />
        <Statics text='neutral' value={neutral} />
        <Statics text='bad' value={bad} />
        <Statics text='avg' value={(good-bad) / (good+bad+neutral)} />
        <Statics text='sumPercent' value={good / (good+bad+neutral)} />
      </div>
    ) 
  }
  return (
    <div>
      This app is used by pressing buttons
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <Button handleClick={handleGood} text='good' /> 
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />         
    </div>
  )
}

export default App
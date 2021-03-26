import React, { useState } from 'react'

/* function generateRandomNumber(max) {
  return Math.random * Math.floor(max)
}
 */

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  // create array of zeroes
  const initVotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(initVotes)
  const [mostVotes, setMostVotes] = useState(0)

  // Set selected to random number
  const handleNextAnecdote = () =>{
    const rndNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(rndNum)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++ 
    if (newVotes[selected] > newVotes[mostVotes]) {
      setMostVotes(selected);
    }
    setVote(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes<br />
      <button onClick={handleVote}> vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes]}<br />
      has {votes[selected]} votes

    </div>
  )
}

export default App
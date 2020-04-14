import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdote = ({ anecdote, points }) => {
  return (
    <div>
      {anecdote}
      <br></br>
      has {points} votes
      <br></br>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [highestVoted, sethighestVoted] = useState(0)

  const getNextAnecdote = () => {
    setSelected(getRandomIntInclusive(0, anecdotes.length - 1))
  }

  const indexOfMaxArr = (arr) => {
    return arr.indexOf(Math.max(...arr));
  }

  const setVotePoint = () => {
    const copy = [...points]
    copy[selected] += 1
    sethighestVoted(indexOfMaxArr(copy))
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} points={points[selected]} />
      <Button handleClick={setVotePoint} text="vote" />
      <Button handleClick={getNextAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes </h1>
      <Anecdote anecdote={props.anecdotes[highestVoted]} points={points[highestVoted]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

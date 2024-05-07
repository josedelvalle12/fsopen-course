import { useState, useEffect } from 'react'
import Statistics from './part1/Components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const suma = good + neutral + bad;
  const average = suma / 3;
  const averagePositive = good / suma;
  const PositiveN = Math.floor(averagePositive * 100) / 100;


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [voteCounter, setVoteCounter] = useState(0);
  const [points, setPoints] = useState(Array.from({ length: anecdotes.length }, () => 0));
  const maxVotesIndex = points.indexOf(Math.max(...points));
  const anecdoteWithMostVotes = anecdotes[maxVotesIndex];

  const handleClick = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);    
  }
  console.log("Current Anecdote: ", selected)

  useEffect(() => {
    // Esta función se ejecuta solo una vez después del montaje inicial del componente
    setPoints(Array.from({ length: anecdotes.length }, () => 0));
  }, []); // Array de dependencias vacío para asegurar que se ejecute solo una vez

  const handleClickVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy); // Actualiza el estado points con el nuevo array de votos
    setVoteCounter(copy[selected]); // Actualiza voteCounter con el voto del elemento seleccionado
    console.log(copy)
  }
  
  return (
    <div>
    <div>
    <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    </div>
    <div>
      <h2>Statistics</h2>
      {suma === 0 ? (
        <p>No feedback given</p>) : 
      (<div>
      <Statistics text="Good" value={good}/>
      <Statistics text="Neutral" value={neutral}/>
      <Statistics text="Bad" value={bad}/>
      <Statistics text="Suma" value={suma}/>
      <Statistics text="Average" value={average}/>
      <Statistics text="Positive" value={PositiveN}/>
        </div>
      )} 

      <h2>Anecdotes</h2>
      {anecdotes[selected]}
      <br></br>
      <p>Has {points[selected]} votes</p>
      <button onClick={handleClickVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <br></br>
      <h3>Anecdote with most votes</h3>
      <p>{anecdoteWithMostVotes}</p>
    </div>


    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
      <h1>Connect the frontnd file with backend file</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((jokes,index)=>(
        <div key={jokes.id}>
          <h3>{jokes.name}</h3>
          <p>{jokes.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App

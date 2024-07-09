import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('useEffect foi chamado')
  }, [count])
  return (
    <>
      <div>
        <p>Contador 1: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar Contador 1</button>
        <p>Contador 2: {count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>Incrementar Contador 2</button>
      </div>
    </>
  )
}

export default App

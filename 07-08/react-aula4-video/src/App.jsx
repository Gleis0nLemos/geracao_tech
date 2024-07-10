import { useState } from "react";
import { useEffect } from "react"


const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function boasVindas() {
    alert("Boas Vindas");
  }

  useEffect(() => {
    console.log("useEffect foi chamado")
  });

  useEffect(() => {
    boasVindas();
    console.log("useEffect que é chamado apenas uma vez")
  }, [])

  useEffect(() => {
    console.log('useEffect ativado somente por dependências');
  }, [count])

  return (
    <> 
      <h1>Hello, World!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nam, voluptates eveniet, amet non dolorum natus, dolorem voluptatibus aliquid temporibus modi nobis est vero. Ea distinctio rem ab iusto commodi?</p>

      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <h2>Contador: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>add</button>
    </>
  )
}

export default App

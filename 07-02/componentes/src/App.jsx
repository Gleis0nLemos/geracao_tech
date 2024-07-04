import { useState } from 'react'
import { useEffect } from 'react'

const Hello = () => {
  return (
    <h1>Hello, dev!</h1>
  )
}

const Saudacao = ({name}) => {
  return (
    <h1>Hello, {name}</h1>
  )
}

const Contador = () => {
  const [count, counter] = useState(0)
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => counter(count + 1)}> + </button>
      <button onClick={() => counter(count - 1)}> - </button>
    </div> 
  )
}

const Portfolio = () => {
  return (
    <div>
      <h1>Vamos nos conectar no GitHub?</h1>
      <a href="https://github.com/gleis0nlemos" target="_blank"><h1>Follow</h1></a>
    </div>   
  );
}

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }
  
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} placeholder='Insira seu nome' />
      <h1>Hello, {name}!</h1>
    </div>
  )
}

const DateTimeDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.toLocaleDateString()}</p>
    </div>
  )
}

const TaskLisk = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  )
}

const App = () => {

  // Parte lógica do component

  return (

    // Parte visivel do component
    <div>
      <Hello />
      <Saudacao name="João" />
      <SimpleForm />
      <Portfolio />
      <TaskLisk tasks={["Tarefa 1", "Tarefa 2", "Tarefa 3"]} />
      <Contador />
      <DateTimeDisplay />
    </div>
   
  )
}

export default App;
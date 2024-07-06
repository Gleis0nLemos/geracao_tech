import { useState } from "react"

export function ToDoList() { 
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: 'Compras',
      description: 'Comprar roupas e calçados'
    },
    {
      id: 2,
      title: 'Compras',
      description: 'Comprar roupas e calçados'
    },
    {
      id: 3,
      title: 'Compras',
      description: 'Comprar roupas e calçados'
    }
  ])

  function handleAddNewToDo(event) {
    event.preventDefault()
    setToDos((todos) => {
      const newToDo = {
        title: inputValue,
        description: textareaValue
      }
      return [...todos, newToDo];
    })

    setInputValue('')
    setTextareaValue('')
  }

  function handleRemoveToDo(id) {
    const newToDoList = toDos.filter((todo) => todo.id !== id)
    setToDos(newToDoList)
  }
  return (
    <main>
        <div>
          <form onSubmit={handleAddNewToDo}>
              <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder='Insira um título' className='todo-input'/>
              <textarea value={textareaValue} onChange={(event) => setTextareaValue(event.target.value)} type="text" placeholder='Insira uma descricão' className='todo-textarea'/>
              <button type='submit'>Adicionar</button>
          </form>
        </div>
        <div className='todo-list-container'>
          {toDos?.map((toDo, index) => (
            <div key={index}>
              <input type="checkbox" id={toDo.title} onClick={() => handleRemoveToDo(toDo.id)}/>    
              <label htmlFor={toDo.title}>{toDo.title}</label>
              <p>{toDo.description}</p>
            </div>
          ))}
        </div>
      </main>
  )
}
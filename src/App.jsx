import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  

  return  <div>
    {todos.map((todo) => {
      return <div key = {todo.id}>
        <Todos title = {todo.title} description = {todo.description} completed = {todo.completed}></Todos>
      </div>
    })}
  </div>
}

function Todos(props){
  return <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
    <button>{props.completed === true ? "completed" : "Mark as completed"}</button>
  </div>
}

export default App

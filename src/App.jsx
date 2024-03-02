import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
   axios.get("https://sum-server.100xdevs.com/todos")
   .then((res) => {
    setTodos(res.data.todos)
   })
  }, []);

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

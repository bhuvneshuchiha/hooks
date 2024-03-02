import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  

  return  <div>
    <Todos title = "Go to the gym" description = "Stay fit for the rest of the year" completed = "false"></Todos>
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

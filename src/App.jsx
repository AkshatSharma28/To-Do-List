import Navbar from './components/Navbar'
// import './App.css'
import { useState } from 'react'

import Todolist from './components/Todolist';

function App() {

  const [todo , setTodo] = useState("");
  const [todos , setTodos] = useState([]);

  

  return (
    <>
    <Navbar/>
      <Todolist todo = {todo} setTodo = {setTodo} todos = {todos} setTodos = {setTodos}/>
    </>
  )
}

export default App

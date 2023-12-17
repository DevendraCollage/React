import { useState } from 'react'
import './App.css'
import AddToDo from './Components/AddToDo'
import Todos from './Components/Todos'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <AddToDo/>
        <Todos/>
        <Navbar/>
      </main>
    </>
  )
}

export default App

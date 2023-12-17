import './App.css'
import AddToDo from './Components/AddToDo'
import Todos from './Components/Todos'
import Navbar from './Components/Navbar'
import { RiTodoLine } from "react-icons/ri";

function App() {

  return (
    <>
      <main>
        <h1><RiTodoLine /> TODO REACT + TYPESCRIPT <RiTodoLine /></h1>
        <AddToDo/>
        <Todos/>
        <Navbar/>
      </main>
    </>
  )
}

export default App

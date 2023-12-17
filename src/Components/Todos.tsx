import { useTodos } from '../store/todos'
import { useSearchParams } from "react-router-dom";

export default function Todos() {
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    let todos̥Data = searchParams.get("todos");
    console.log("🚀 ~ file: todos.tsx:10 ~ Todos ~ todos̥Data:", todos̥Data)


    let filterData = todos;

    if(todos̥Data === "active"){ // This will return not completed data to the function
        filterData = filterData.filter((task) => !task.completed  )
    }

    if(todos̥Data === "completed"){ // This will return completed task data to the function
        filterData = filterData.filter((task) => task.completed  )
    }


  return (
    <ul className="main-task">
        {
            filterData.map((todo) => {
                return <li key={todo.id}>
                    <input type="checkbox"  id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => toggleTodoAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>

                    {
                        todo.completed && (
                            <button type='button' 
                            onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
                        )
                    }
                </li>
            })
        }
    </ul>
  )
}

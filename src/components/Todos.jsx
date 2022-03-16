import { useSelector } from "react-redux"
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import styles from "./todo.module.css";


const Todos = () => {
  const todos = useSelector((state) => state.todos.data);
  return (
    <div className={styles.todos}>
      <h1>TODOS</h1>
      <TodoInput />
      <h2>Todo List</h2>
      {todos.map((todo) =>(
      <div key={todo.id}>
        <Todo todo={todo}/>
        </div>
      ))}
    </div>
  )
}

export default Todos
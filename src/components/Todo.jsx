import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todos/todos.actions';
import styles from "./todo.module.css";

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.todo}>
      
      {todo.value}
      <button onClick={ () => dispatch(deleteTodo(todo.id))}
      >Delete</button>

      </div>
  )
}

export default Todo
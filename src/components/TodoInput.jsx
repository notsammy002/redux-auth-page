import React, { useState} from 'react';

import { useDispatch } from 'react-redux';

import { addTodo } from '../store/todos/todos.actions';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [value, setvalue] = useState("")
  return (
    <div>
        <input value = { value } onChange ={ (e)=>
            setvalue(e.currentTarget.value)} />

        <button 
        onClick={() =>{
        dispatch( addTodo(value))
        setvalue("")
        }
        }>
          ADD
        </button>
    </div>
  )
}

export default TodoInput
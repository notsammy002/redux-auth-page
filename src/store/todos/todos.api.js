
import axios from "axios";
import { loginError, loginRequest, loginSuccess } from "./auth.actions";


export const addTodo = (value) => dispatch => ({
    type: ADD_TODOS,
    payload: {
        id: v4(),
        value,
    }
})

export const deleteTodo = (todoId) => dispatch =>({
    type: DELETE_TODOS,
    payload: todoId,
})
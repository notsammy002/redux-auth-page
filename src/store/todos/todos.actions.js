import { v4 } from "uuid";
import { ADD_TODOS, DELETE_TODOS} from "./todos.actionType";

export const addTodo = (value) => ({
    type: ADD_TODOS,
    payload: {
        id: v4(),
        value,
    }
})

export const deleteTodo = (todoId) => ({
    type: DELETE_TODOS,
    payload: todoId,
})
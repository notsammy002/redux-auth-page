
import { INCREMENT, DECREMENT} from "./counter.actionType";
import { initalState } from "./counter.constants";

export const counterReducer = (state = initalState, {type, payload}) => {
    switch(type){
        case INCREMENT: {
            return {...state, count: state.count + 1};
        }
        case DECREMENT: {
            return {...state, count: state.count - 1};
        }
        default: {
            return state;
        }
    }
}
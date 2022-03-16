import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_ || compose;

const thunk = store =>next => action => {
    if(typeof action === "function"){
        console.log("this is a function")
        return action(store.dispatch, store.getState)
    }
    else{
        console.log("this is a object")
        return next(action);
    }
    
}


export const store = createStore(reducer, 
    createComposer(applyMiddleware(thunk)))
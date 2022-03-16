import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../store/counter/counter.actionType';

const Counter = () => {

    let dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
        <h1> {count} </h1>
      <button 
        onClick={() =>
        dispatch({
          type: INCREMENT
        })
      }>
        Increment
      </button>

      <button 
        onClick={() =>
        dispatch({
          type: DECREMENT
        })
      }>
        decrement
      </button>
    </div>
  )
}

export default Counter
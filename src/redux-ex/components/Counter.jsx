import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../counter/counterSlice';

function Counter() {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const incrementCount = ()=>{
        dispatch(increment());
    }

    const decrementCount = ()=>{
        dispatch(decrement());
    }

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default Counter
import React, { useState } from 'react'

function CountStateFunction() {

    // Hooks : make component ready to create state variable manage component 
    // lifecyle, ect
    // Hooks only for function component 

    // declare and manage state : useState
    // const [stateVariable, function] = useState(initialValue);
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const incrementFive = () => {
        for(let i=1; i<=5; i++){
            // wrong
            // setCount(count + 1);

            setCount((prevCount)=>{
                return prevCount + 1; 
            })
        }
    }

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>{' '}
        <button onClick={decrement}>Decrement</button>{' '}
        <button onClick={incrementFive}>Increment With 5</button>
    </div>
  )
}

export default CountStateFunction
import React, { useEffect, useState } from "react";

function FunctionComponentLifecycle() {
  // to manage lifecycle useEffect hook will help you
  const [count, setCount] = useState(10);

  // useEffect(func(),dependenciesList[]);
  useEffect(() => {
    // component did mount
    console.log("Component Did mount Use Effect");
    return () => {
      // this return function is equivalent to componentUnmount()
      console.log("Component Will unmount for function component");
    };
  }, []);

  useEffect(() => {
    // component did update , count is dependency
    console.log("Component did update for count state");
  }, [count]);

  const rootContainer = {
    backgroundColor: "green",
    padding: "8px",
  };
  return (
    <div style={rootContainer}>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionComponentLifecycle;

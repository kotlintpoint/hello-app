import React, { useContext } from "react";
import { CountContext } from "../../helper/ContextProvider";
import ComponentB1 from "./ComponentB1";

function ComponentB() {
  const countValue = useContext(CountContext);
  return (
    <>
      <h1>Component B</h1>
      <button onClick={() => countValue.changeCount(2)}>Increment Count</button>
      <hr></hr>
      <ComponentB1 />
    </>
  );
}

export default ComponentB;

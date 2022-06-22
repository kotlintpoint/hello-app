import React, { useContext } from "react";
import { CountContext } from "../../helper/ContextProvider";
import ComponentA1 from "./ComponentA1";

function ComponentA(props) {
  const countValue = useContext(CountContext);

  return (
    <>
      <h1>Component A</h1>
      <p>Count - {countValue.count}</p>
      <hr></hr>
      {props.children}
    </>
  );
}

export default ComponentA;

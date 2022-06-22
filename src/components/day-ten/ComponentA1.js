import React, { useContext } from "react";
import { MessageContext } from "../../helper/ContextProvider";

function ComponentA1() {
  const message = useContext(MessageContext);

  return (
    <>
      <h1>Component A1</h1>
      <p>Message - {message}</p>
    </>
  );
}

export default ComponentA1;

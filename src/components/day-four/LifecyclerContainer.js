import React, { useState } from "react";
import ClassComponentLifecycle from "./ClassComponentLifecycle";
import FunctionComponentLifecycle from "./FunctionComponentLifecycle";

function LifecyclerContainer() {
  const [show, setShow] = useState(true);

  console.log("Show ", show);

  const displayItem = show ? (
    <ClassComponentLifecycle />
  ) : (
    <p>No Item to Display!!!</p>
  );

  return (
    <div>
      <p>Lifecycle Container</p>
      <button onClick={() => setShow(!show)}>
        Show/Hide Lifecycle Component
      </button>
      {displayItem}
      <hr />
      {show && <FunctionComponentLifecycle />}
    </div>
  );
}

export default LifecyclerContainer;

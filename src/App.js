import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Counter from "./redux-ex/components/Counter";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
}

export default App;

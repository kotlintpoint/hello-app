import "./App.css";
import React, { useState } from "react";
import ComponentA from "./components/day-ten/ComponentA";
import ComponentA1 from "./components/day-ten/ComponentA1";
import ComponentB from "./components/day-ten/ComponentB";
import {
  CountContext,
  FruitContext,
  MessageContext,
} from "./helper/ContextProvider";

const message = "Welcome To Context API";
const fruits = ["Apple", "Banana", "Mango"];

function App() {
  const [count, setCount] = useState(10);

  const changeCount = (value) => {
    setCount(count + value);
  };

  const countValue = { count, changeCount };
  return (
    <MessageContext.Provider value={message}>
      <FruitContext.Provider value={fruits}>
        <CountContext.Provider value={countValue}>
          <div className="App">
            <ComponentA>
              <ComponentA1></ComponentA1>
            </ComponentA>
            <hr></hr>
            <ComponentB />
          </div>
        </CountContext.Provider>
      </FruitContext.Provider>
    </MessageContext.Provider>
  );
}

export default App;

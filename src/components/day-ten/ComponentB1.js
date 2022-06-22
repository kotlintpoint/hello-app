import React, { Component } from "react";
import { FruitContext, MessageContext } from "../../helper/ContextProvider";

class ComponentB1 extends Component {
  renderFruits = (fruits) => {
    return (
      <ul>
        {fruits.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <>
        <h1>Component B1</h1>
        <MessageContext.Consumer>
          {(value) => <p>Message - {value}</p>}
        </MessageContext.Consumer>
        <FruitContext.Consumer>
          {(value) => this.renderFruits(value)}
        </FruitContext.Consumer>
      </>
    );
  }
}

export default ComponentB1;

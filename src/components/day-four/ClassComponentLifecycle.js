import React, { Component } from "react";

export default class ClassComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will unmount");
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("Render");

    /* if (this.state.count === 10) {
      return null;
    } */

    const rootContainer = {
      backgroundColor: "yellow",
      padding: "8px",
    };

    return (
      <div style={rootContainer}>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

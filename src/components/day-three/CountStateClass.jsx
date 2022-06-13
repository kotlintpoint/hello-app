import React, { Component } from 'react'

export class CountStateClass extends Component {

  constructor(props){
    super(props);   // passing props to super class constructor
    this.state = {
        count : 10
    }
  }  

  increment = () => {
    console.log('Increment clicked');
    this.setState({
        count : this.state.count + 1
    })
  }

  decrement = () => {
      this.setState({
          count : this.state.count - 1
      })
  }

  incrementFive = () => {
      for(let i=1; i<=5; i++){
          // wrong
        /* this.setState({
            count : this.state.count + 1
        }) */

        this.setState((prevState, props)=>({
            count : prevState.count + 1
        })
        )
      }
  }

  // When state value change component re-render
  render() {
     // console.log('Component Render');
    return (
      <div>
          <p>Count : {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>{' '}
          <button onClick={this.decrement}>Decrement</button>{' '}
          <button onClick={this.incrementFive}>Increment with 5</button>{' '}
       </div>
    )
  }
}

export default CountStateClass
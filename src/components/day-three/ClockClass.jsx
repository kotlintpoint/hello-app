import React, { Component } from 'react'

export class ClockClass extends Component {

    constructor(props){
        super(props);
        console.log('Constructor')
        this.state = { date : new Date() }
    }

    // Life cycle method
    // ComponentDidMount : will get call one time when component render
    componentDidMount(){
        console.log('Component Did Mount');
        setInterval(()=>{
            this.setState({ date : new Date() })
        },1000);
    }

  render() {
      console.log('Component Render')
    return (
      <div>Time : {this.state.date.toLocaleTimeString()}</div>
    )
  }
}

export default ClockClass
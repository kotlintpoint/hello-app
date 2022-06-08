import React, { Component } from 'react';

class WelcomeClass extends Component{
    render(){
        return (
        <div>
            <h1>Welcome Class Component</h1>
            <h2>{this.props.msg}</h2>
        </div>
        )
    }
}

export default WelcomeClass;
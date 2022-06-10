import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ObjectAsPropsInClass extends Component {

  render() {
      // destructuring 
    const { user } = this.props;
    const { firstName, lastName, email, age } = user;
    return (
      <div>
          <h1>Object As Props In Class</h1>
          <p>{JSON.stringify(user)}</p>
        <h3>First Name : {firstName}</h3>
        <h3>Last Name : {lastName}</h3>
        <h3>Email : {email}</h3>
        <h3>Age : {age}</h3>
      </div>
    )
  }
}

export default ObjectAsPropsInClass
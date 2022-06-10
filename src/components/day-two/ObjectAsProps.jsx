import React from 'react'

function ObjectAsProps(props) {
    // console.log(props);
    // destructure object 
    const { user } = props;
    const { firstName, lastName, email, age } = user;
  return (
    <div>
        <p>{JSON.stringify(user)}</p>
        <h3>First Name : {firstName}</h3>
        <h3>Last Name : {lastName}</h3>
        <h3>Email : {email}</h3>
        <h3>Age : {age}</h3>
    </div>
  )
}

export default ObjectAsProps

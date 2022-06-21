import React from "react";
import PropTypes from "prop-types";

function Greetings(props) {
  return (
    <>
      <h1>Welcome, {props.name}</h1>
      <p>Age : {props.age}</p>
    </>
  );
}

Greetings.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default Greetings;

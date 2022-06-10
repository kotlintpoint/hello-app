import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ArrayAsPropsInClass extends Component {

  render() {
    const { data } = this.props;
    console.log('Data ',data);

    const fruitList = data.map((value, index) => {
      return <li key={value}>{value} - {index}</li>
    })

    return (
      <div>
        <h1>Fruit List</h1>
        <ul>
          {fruitList}
        </ul>
        <ol>
          {
            data.map(theFruit => <li key={theFruit}>{theFruit}</li>)
          }
        </ol>

      </div>
    )
  }
}

export default ArrayAsPropsInClass
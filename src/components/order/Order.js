import React, { Component } from 'react'

export default class Order extends Component {

  render() {
    return (
      <div>
        <h1>{item.first_name} {item.last_name}</h1>
        <span>{item.dumpling_type}: {item.quantity}</span>
        <span> and {item.special_instructions}</span>
      </div>
    )
  }
}

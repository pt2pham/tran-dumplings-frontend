import React, { Component } from 'react'
import {
  Button,
  Table
} from 'semantic-ui-react'
import { object, func } from 'prop-types'

const approveMessage = "Hello";

const declineMessage = "Sorry";

export class Order extends Component {
  state = {
    showModal: false,
  }
  static propTypes = {
    order: object.isRequired,
    populateModal: func.isRequired
  }

  processOrder = (x) => {
    // Send a default email
    this.props.populateModal({
      approval: x,
      order: this.props.order
    });
  }

  render() {
    const { order } = this.props;
    return (
      <Table.Row>
        <Table.Cell width='1'>
          <Button.Group>
            <Button negative onClick={() => (this.processOrder(false))}>Decline</Button>
            <Button.Or />
            <Button positive onClick={() => (this.processOrder(true))}>Approve</Button>
          </Button.Group>
        </Table.Cell>
        <Table.Cell>{order.date || 'January 7th, 2018'}</Table.Cell>
        <Table.Cell>{order.first_name} {order.last_name}</Table.Cell>
        <Table.Cell>{order.dumpling_type}</Table.Cell>
        <Table.Cell width='1'>{order.quantity}</Table.Cell>
        <Table.Cell>{order.special_instructions}</Table.Cell>
      </Table.Row>
    );
  }
}
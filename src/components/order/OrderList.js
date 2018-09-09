import React, { Component } from 'react'
import { API_URL, ORDER } from '../../config/Api'
import { TopHeader } from '../Header'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default class OrdersList extends Component {
  state = {
    orders: []
  }

  componentDidMount() {
    fetch(API_URL + ORDER)
      .then(res => res.json())
      .then(data => this.setState({ orders: data }))
      .catch(e => console.log('Error thrown while fetching ', API_URL + ORDER, e));
  }

  renderHeader() {
    return (
      <Table.Header>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Dumpling Type</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Instructions</Table.HeaderCell>
      </Table.Header>
    );
  }

  renderBody() {
    return (
      <Table.Body>
        {this.state.orders.map(item => <Order item={item} />)}
      </Table.Body>
    );
  }

  renderFooter() {
    return (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='4'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    );
  }

  render() {
    console.log('Rendering.', this.state.orders);
    return (
      <div>
        <TopHeader />
        <Table celled sortable singleline color>
          {this.renderHeader()}
          {this.renderBody()}
          {this.renderFooter()}
        </Table>
      </div>
    );
  }
}

const Order = ({ item }) => {
  return (
    <Table.Row>
      <Table.Cell>{item.first_name} {item.last_name}</Table.Cell>
      <Table.Cell>{item.dumpling_type}</Table.Cell>
      <Table.Cell>{item.quantity}</Table.Cell>
      <Table.Cell>{item.special_instructions}</Table.Cell>
    </Table.Row>
  );
}

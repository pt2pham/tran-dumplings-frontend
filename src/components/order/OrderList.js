import React, { Component } from 'react'
import { API_URL, ORDER } from '../../config/Api'
import { TopHeader } from '../Header'
import { Order } from './Order'
import EmailModal from './EmailModal'
import { OrderClass } from '../../data/OrderClass'
import {
  Icon,
  Menu,
  Table
} from 'semantic-ui-react'

export default class OrdersList extends Component {
  state = {
    orders: [],
    showModal: false,
    modalAttributes: {
      approval: true,
      order: new OrderClass()
    }
  }

  componentDidMount() {
    fetch(API_URL + ORDER)
      .then(res => res.json())
      .then(data => this.setState({ orders: data }))
      .catch(e => console.log('Error thrown while fetching ', API_URL + ORDER, e));
  }

  handleModalRender = (attributes) => {
    this.setState({ showModal: true });
    this.setState({ modalAttributes: attributes });
  }

  renderHeader() {
    console.log('Rendering Table Header');
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Dumpling Type</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Instructions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }

  renderBody() {
    console.log('Rendering Table Body');
    return (
      <Table.Body>
        {this.state.orders.map(x => <Order order={x} populateModal={this.handleModalRender} />)}
      </Table.Body>
    );
  }

  renderFooter() {
    console.log('Rendering Footer');
    return (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='6'>
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
    console.log('Rendering OrderList...', this.state.orders);
    return (
      <div>
        <TopHeader />
        <EmailModal
          open={this.state.showModal}
          modalAttributes={this.state.modalAttributes} />
        <Table celled sortable singleLine>
          {this.renderHeader()}
          {this.renderBody()}
          {this.renderFooter()}
        </Table>
      </div>
    );
  }
}

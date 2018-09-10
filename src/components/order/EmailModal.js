import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { string, bool, object } from 'prop-types'

export default class EmailModal extends Component {
  state = {
    showModal: this.props.open,
    modalAttributes: this.props.modalAttributes
  }

  static propTypes = {
    defaultEmail: string,
    open: bool,
    modalAttributes: object.isRequired
  }

  static defaultProps = {
    defaultEmail: "Hoopla",
    open: false,
    modalAttributes: {
      approval: true,
      order: {
        first_name: "Phong",
        last_name: "Pham"
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.open !== this.state.open) {
      this.setState({showModal: newProps.open});
    }
  }

  handleModalClose = () => {
    this.setState({showModal: false});
    // Send call to API 
    // /api/order/update-status
  }
  
  render() {
    const {
      defaultEmail,
      modalAttributes
    } = this.props;
    
    let approval = modalAttributes.approval;
    let order = modalAttributes.order;
    return (
      <Modal open={this.state.showModal}>
        <Modal.Header>{ approval ? "Confirmation" : "Adjustments Required"}</Modal.Header>
        <Modal.Content image scrolling>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>{order.first_name} {order.last_name}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
            <p>{defaultEmail}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handleModalClose}>
            Send <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

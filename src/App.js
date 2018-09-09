import React, { Component } from 'react';
import OrdersList from './components/order/OrderList';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrdersList/>
      </div>
    );
  }
}

export default App;

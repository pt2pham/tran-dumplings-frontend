import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OrdersList from './components/order/OrderList';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #B3E5FC; }'}</style>
          <meta charSet="utf-8" />
          <title>Tran Dumplings</title>
        </Helmet>
        <OrdersList />
      </div>
    );
  }
}

export default App;

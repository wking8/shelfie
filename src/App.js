import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Form from './components/form/Form';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          products={this.state.products}
        />
        <Form />
      </div>
    );
  }
}



import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Form from './components/form/form';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />

      </div>
    );
  }
}



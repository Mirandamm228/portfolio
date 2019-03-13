import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import Nav from './components/nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;

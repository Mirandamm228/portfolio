import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage className="Shadow"/>
      </div>
    );
  }
}

export default App;

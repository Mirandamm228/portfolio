import React, { Component } from 'react';
import './App.css';
// import LandingPage from './components/landing-page/LandingPage';
import Nav from './components/nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <img className="landing-page_image" src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt=""/> */}
      </div>
    );
  }
}

export default App;

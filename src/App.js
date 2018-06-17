import React, { Component } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import Hangman from './components/Hangman'
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/hangman" component={Hangman} />
        </main>
      </div>
    );
  }
}

export default App;

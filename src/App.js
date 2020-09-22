import React, { Component } from 'react';
import './App.scss';
import AppHeader from './components/AppHeader.js';
import AppMain from './components/AppMain.js'

class App extends Component {
  state = {
    num: 0
  }

  increment = () => {
    this.states.num++;
  }

  render() {
    return (
      <main className="app">
        <AppHeader />
        <AppMain onInrement={this.increment}/>
      </main>
    );
  }


}

export default App;

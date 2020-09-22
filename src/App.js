import React, { Component } from 'react';
import './App.scss';
import AppHeader from './components/AppHeader.js';
import AppMain from './components/AppMain.js'

class App extends Component {
  state = {
    num: 0
  }

  increment = () => {
    this.setState({ num: this.state.num + 1 });
  }

  render() {
    return (
      <main className="app">
        <AppHeader value={this.state.num} />
        <AppMain onIncrement={this.increment}/>
      </main>
    );
  }

}

export default App;

import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
        <header><h1>Pokedex</h1></header>
        <Pokedex />
      </>
    )
  }  
}

export default App;

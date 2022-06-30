import React from 'react';
import './App.css';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonIndex: 0,
    }
  }

  render() {
    return (
      <>
        <header><h1>Pokedex</h1></header>
        <Pokedex 
        { ...this.state }
        />
      </>
    )
  }  
}

export default App;

import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    const { pokemonIndex } = this.props;

    const pokemonList = pokemons.map((element) => {
      const { value, measurementUnit } = element.averageWeight;
      return(
      <div key={element.id} className="eachPokemon">
        <Pokemon 
          pokemonName={ element.name}
          pokemonType={ element.type }
          averageWeight={ [value, measurementUnit] }
          pokemonImg={ element.image }
        />      
      </div>
      )
    })[pokemonIndex];
    return (
      <div className="eachPokemonFather">
        {pokemonList}
      </div>
    )
  }  
}
export default Pokedex;
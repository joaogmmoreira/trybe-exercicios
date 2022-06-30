import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {
      pokemonName,
      pokemonType,
      averageWeight,
      pokemonImg,
    } = this.props;
    
    return (      
      <div className="insidePokemon">
        <div className="pokemonData">
          <p>{ pokemonName }</p>
          <p>{ pokemonType }</p>
          <p>{ averageWeight }</p>
        </div>
        <div className='pokemonImg'>
          <img src={ pokemonImg } alt={ pokemonName }></img>  
        </div>        
      </div>
    )
  }  
}

export default Pokemon;
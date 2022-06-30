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
      <div>
        <p>{ pokemonName }</p>
        <p>{ pokemonType }</p>
        <p>{ averageWeight }</p>
        <img src={ pokemonImg } alt={ pokemonName }></img>          
      </div>
    )
  }  
}

export default Pokemon;
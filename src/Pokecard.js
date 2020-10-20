import React from 'react';
import './Pokecard.css'

const pokemon_api = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let img = `${pokemon_api}${props.id}.png`

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-image" src={img} />
            <div className="Pokecard-data">{props.type} </div>
            <div className="Pokecard-data">{props.exp} </div>
        </div>
    )
}

export default Pokecard

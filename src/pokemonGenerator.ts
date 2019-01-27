const fs = require('fs');

export function getPokemonByType(type: string): number {
    let pokemonDatabase = fs.readFileSync('pokemon.json', 'utf8');
    pokemonDatabase = JSON.parse(pokemonDatabase);
    let typePokemonListSize = pokemonDatabase[type].length;
    let randomIndex = Math.floor((Math.random() * typePokemonListSize));
    console.log(pokemonDatabase[type][randomIndex]);
    return pokemonDatabase[type][randomIndex];
}

getPokemonByType('fire');
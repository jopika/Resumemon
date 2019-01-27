let Pokedex = require('pokedex-promise-v2');
let P = new Pokedex();

export function getPokemonIDByType(type: string): void {
    let pokemonSet: Set<string> = new Set();
    let pokemonPromiseArray: any[] = [];
    P.getPokemonsList()
        .then(function(response: any) {
            console.log(response.results);
            for (let pokemon of response.results) {
                let pokemonName = pokemon.name.split("-");
                pokemonSet.add(pokemonName[0]);
            }
            console.log(pokemonSet);
            return pokemonSet;
        })
        .then(function(response: any) {
            for (let pokemon of response) {
                pokemonPromiseArray.push(getPokemonByName(pokemon));
            }
            return Promise.all(pokemonPromiseArray);
        })
        .then(function(response: any) {
            console.log(response);
        })
        .catch(function(error: string) {
            console.log('There was an ERROR: ', error);
        })
}

function getPokemonByName(pokemon: string) {
    return P.getPokemonByName(pokemon);
}

getPokemonIDByType('Fire');
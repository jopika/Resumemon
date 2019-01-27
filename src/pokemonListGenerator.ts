// The sole purpose of this function is to add pokemon to the pokemon.json file
// This should not be used ever again unless your name is Stevens Qiu

const fs = require('fs');
const process = require('process');

let Pokedex = require('pokedex-promise-v2');
let P = new Pokedex();

let pokemonTypeMap: any = {};
export function getPokemonByIndex(index: number): any {
    let pokemonSet: Set<string> = new Set();
    let pokemonPromiseArray: any[] = [];
    return P.getPokemonsList()
        .then(function(response: any) {
            // console.log(response.results);
            for (let pokemon of response.results.slice(index, index + 100)) {
            // for (let pokemon of response.results) {
                // console.log(pokemon.name);
                // let pokemonName = pokemon.name.split("-");
                // if (pokemonName[0] === 'mime' || pokemonName[0] === 'mr' || pokemonName[0] === 'giratina' || pokemonName[0] === 'nidoran' || pokemonName[0] === 'ho') {
                //     pokemonSet.add(pokemonName[0] + pokemonName[1]);
                // } else {
                //     pokemonSet.add(pokemonName[0]);
                // }
                pokemonSet.add(pokemon.name);
            }
            // console.log(pokemonSet);
            return pokemonSet;
        })
        .then(function(response: any) {
            for (let pokemon of response) {
                pokemonPromiseArray.push(getPokemonByName(pokemon));
            }
            return Promise.all(pokemonPromiseArray);
        })
        .then(function(response: any) {
            let pokemonTypes = new Set();

            let contents = fs.readFileSync('pokemon.json', 'utf8');
            contents = JSON.parse(contents);
            
            for (let pokemon of response) {
                for (let pokemonType of pokemon.types) {
                    // console.log(pokemon.name + ": " + pokemonType.type.name);
                    pokemonTypes.add(pokemonType.type.name);
                }
            }
            for (let pokemonType of pokemonTypes) {
                pokemonTypeMap[pokemonType] = [];
            }
            // pokemonTypeMap['fairy'].push('Hello');
            for (let pokemon of response) {
                for (let pokemonType of pokemon.types) {
                    // console.log(pokemon.name + ": " + pokemonType.type.name);
                    // console.log(pokemonType.type.name);
                    let contentMap = contents[pokemonType.type.name];
                    if (contentMap === undefined) {
                        contents[pokemonType.type.name] = [];
                    }
                    // console.log(pokemonType.type.name + ": " + contentMap);
                    contents[pokemonType.type.name].push(pokemon.name);
                }
            }
            pokemonTypeMap = contents;
            // console.log(contents);
            // contents['ghost'].push('hello');
            return 0;
        })
        .catch(function(error: string) {
            console.log('There was an ERROR: ', error);
        })
}

function getPokemonByName(pokemon: string) {
    return P.getPokemonByName(pokemon);
}

getPokemonByIndex(800).then(()=>{
    console.log(pokemonTypeMap);
    // let contents = fs.readFileSync('pokemon.json', 'utf8');
    // contents = JSON.parse(contents);
    // fs.writeFileSync('pokemon.json', JSON.stringify(pokemonTypeMap), 'utf-8');
    process.exit();
});
// setTimeout(getPokemonByIndex(100), 20000);
// setTimeout('20000');
// getPokemonByIndex(200);
// setTimeout('20000');
// getPokemonByIndex(300);
// setTimeout('20000');
// getPokemonByIndex(400);
// setTimeout('20000');
// getPokemonByIndex(500);
// setTimeout('20000');
// getPokemonByIndex(600);




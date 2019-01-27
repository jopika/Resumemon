import {Buzzwords} from "./Buzzwords";

export function getType(): PokeType {
        let random: number = Math.floor(Math.random() * 18 + 1);
        switch (random) {
            case 1:
                return PokeType.steel;
            case 2:
                return PokeType.ghost;
            case 3:
                return PokeType.fire;
            case 4:
                return PokeType.poison;
            case 5:
                return PokeType.fairy;
            case 6:
                return PokeType.water;
            case 7:
                return PokeType.dragon;
            case 8:
                return PokeType.electric;
            case 9:
                return PokeType.flying;
            case 10:
                return PokeType.ground;
            case 11:
                return PokeType.dark;
            case 12:
                return PokeType.bug;
            case 13:
                return PokeType.fighting;
            case 14:
                return PokeType.normal;
            case 15:
                return PokeType.rock;
            case 16:
                return PokeType.grass;
            case 17:
                return PokeType.psychic;
            case 18:
                return PokeType.ice;
        }
        
}

/**
 * Types of pokemon available
 */
export enum PokeType {
    normal = "normal",
    fighting = "fighting",
    flying = "flying",
    poison = "poison",
    ground = "ground",
    rock = "rock",
    bug = "bug",
    ghost = "ghost",
    fire = "fire",
    water = "water",
    grass = "grass",
    electric = "electric",
    psychic = "psychic",
    ice = "ice",
    dragon = "dragon",
    steel = "steel",
    fairy = "fairy",
    dark = "dark"
}

let typeMap: any = 
{       
    'normal': ['github', 'server', 'database', 'racket'],
    'fighting': ['docker', 'kubernetes'],
    'flying': ['agile', 'swift', 'scalability'],
    'poison': ['blockchain', 'security'],
    'ground': ['ruby', 'rails', 'django', 'java', 'rust'],
    'rock': ['sql', 'mysql', 'php', 'dynamodb', 'cassandra', 'postgresql', 'cockroachdb', 'mongodb'],
    'bug': ['html', 'matlab', 'latax'],
    'ghost': ['aws', 'azure', 'windows', 'osx', 'encryption'],
    'fire': ['back-end', 'devops', 'distributed systems', 'golang'],
    'water': ['erlang', 'scala', 'lua', 'haskell', 'perl', 'ocaml'],
    'grass': ['app', 'node.js', 'javascript', 'typescript', 'api', 'rest', 'python'],
    'electric': ['c',  'linux', 'unix', 'bash', 'shell', 'terminal'],
    'psychic': ['algorithms', 'data structure', 'r'],
    'ice': ['android', 'kotlin', 'mobile', 'ios'],
    'dragon': ['cloud', 'full-stack', 'open source', 'big data', 'data mining',],
    'steel': ['project management', 'leadership', 'software engineering', 'software development'],
    'fairy': ['front-end', 'web design', 'ux design', 'ui', 'ajax', 'angularjs', 'react', 'css', '.net'],
    'dark': ['neural networks', 'deep learning', 'vue.js', 'data mining',  'artificial intelligence', 'machine learning'],
}
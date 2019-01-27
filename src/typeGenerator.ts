import {Buzzwords} from "./Buzzwords";


export class typeGenerator {
    constructor() {
    }

    /**
     * returns a random pokemon type
     * @returns {any}
     */
    public getType() {
        let random: number = Math.floor(Math.random() * 18 + 1);
        switch (random) {
            case 1:
                return pokeType.steel;
            case 2:
                return pokeType.ghost;
            case 3:
                return pokeType.fire;
            case 4:
                return pokeType.poison;
            case 5:
                return pokeType.fairy;
            case 6:
                return pokeType.water;
            case 7:
                return pokeType.dragon;
            case 8:
                return pokeType.electric;
            case 9:
                return pokeType.flying;
            case 10:
                return pokeType.ground;
            case 11:
                return pokeType.dark;
            case 12:
                return pokeType.bug;
            case 13:
                return pokeType.fighting;
            case 14:
                return pokeType.normal;
            case 15:
                return pokeType.rock;
            case 16:
                return pokeType.grass;
            case 17:
                return pokeType.psychic;
            case 18:
                return pokeType.ice;
        }
    }

}

/**
 * Types of pokemon available
 */
export enum pokeType {
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
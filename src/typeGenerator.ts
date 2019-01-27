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
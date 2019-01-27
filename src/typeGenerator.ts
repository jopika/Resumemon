import {Buzzwords} from "./Buzzwords";


export class typeGenerator {
    constructor() {
    }

    /**
     * Given a list of buzzwords, return a pokemon type based on how many of those words
     * fall into certain categories
     * @param {Buzzwords} bw: list of buzzwords to relate
     * @returns {pokeType}: type of pokemon
     */
    public computeType(bw: Buzzwords): pokeType {
        return pokeType.normal; // stub
    }

}

/**
 * Types of pokemon available
 */
export enum pokeType {
    normal,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy
}
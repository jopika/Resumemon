import {Move} from "./Move";
import {PokeType} from "./typeGenerator";
export class Pokemon {
    name: string;
    level: number;
    type: string;
    health: number;
    moveset: Set<Move>;
    image: string;

    constructor(name: string, powerLevel: number, type: string, moveset: Set<Move>, image: string) {
        this.name = name;
        this.health = Math.ceil(100 + powerLevel * 3);
        // this.health = Math.ceil(200 + (Math.log(powerLevel) / Math.log(10)) * 100);
        this.level = powerLevel;
        this.type = type;
        this.moveset = moveset;
        this.image = image;
    }

    /**
     * Picks a random move from moveset
     * @returns {Move}: Move chosen at random
     */
    public pickAttack(): Move {
        let numMoves = this.moveset.size;
        let moveArr = Array.from(this.moveset);
        return moveArr[Math.floor(Math.random() * (numMoves))];
    }

}

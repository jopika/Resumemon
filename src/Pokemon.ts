import {Move} from "./Move";
export class Pokemon {
    name: string;
    level: number;
    type: string;
    health: number;
    moveset: Set<Move>;

    constructor(name: string, powerLevel: number, type: string, moveset: Set<Move>) {
        this.name = name;
        this.health = powerLevel;
        this.level = powerLevel;
        this.type = type;
        this.moveset = moveset;
    }

    /**
     * Picks a random move from moveset
     * @returns {Move}: Move chosen at random
     */
    public pickAttack(): Move {
        let numMoves = this.moveset.size;
        let moveArr = Array.from(this.moveset);
        return moveArr[Math.floor(Math.random() * numMoves + 1)];
    }

}

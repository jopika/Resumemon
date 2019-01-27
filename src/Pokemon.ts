import {Move} from "./Move";
export class Pokemon {
    name: string;
    level: number;
    type: string;
    health: number;
    moveset: Set<Move>;

    constructor(name: string, powerLevel: number, type: string, moveset: Set<Move>) {
        this.name = name;
        this.health = powerLevel; // TODO: fix this
        this.level = powerLevel;
        this.type = type;
        this.moveset = moveset;
    }
}

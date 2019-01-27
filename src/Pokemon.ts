import {Move} from "./Move";
import {PokeType} from "./typeGenerator";
export class Pokemon {
    name: string;
    level: number;
    type: PokeType;
    health: number;
    moveset: Set<Move>;
    image: string;

    constructor(name: string, powerLevel: number, type: PokeType, moveset: Set<Move>, image: string) {
        this.name = name;
        this.health = Math.ceil(200 + (Math.log(powerLevel) / Math.log(10)) * 100);
        this.level = powerLevel;
        this.type = type;
        this.moveset = moveset;
        this.image = image;
    }
}

import { Buzzwords } from "./Buzzwords";

export function generatePowerLevel(buzzwords: Buzzwords) {
    let powerLevel: number;

    for (let word in buzzwords.buzzwords) {
        powerLevel += buzzwords.buzzwords[word];
    }
}
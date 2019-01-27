import { Buzzwords } from "./Buzzwords";

const optimalBuzzRepeats = 5;
const optimalRepeatScore = 30;
const allowedBuzzCoefficient = 0.3;
const repeatWeight = 0.8;
const buzzCoefficientWeight = 0.3;
const maxRandomPowerDecrementor = 10;

export function generatePowerLevel(buzzwords: Buzzwords): number {
    let repeatScore: number = calculateRepeatScore(buzzwords.buzzwords);

    let buzzCoefficientScore: number = 
    calculateBuzzCoefficientScore(buzzwords.nonBuzz, buzzwords.totalBuzz);
    
    let maxPowerLevel = repeatScore * repeatWeight + 
    buzzCoefficientScore * buzzCoefficientWeight;

    let powerLevel = randomizePower(maxPowerLevel);
    return Math.floor(powerLevel);
}

function calculateRepeatScore(buzzwords: {[key: string]: number}) {
    let totalRepeatScore = 0;
    for (let word in buzzwords) {
        let wordScore = buzzwords[word];
        if (buzzwords[word] > optimalBuzzRepeats) {
            wordScore = optimalBuzzRepeats - buzzwords[word];
        }
        totalRepeatScore += wordScore;
    }
    totalRepeatScore = Math.max(totalRepeatScore, 0);
    // console.log(totalRepeatScore);
    totalRepeatScore = totalRepeatScore / optimalRepeatScore * 100;
    totalRepeatScore = Math.min(totalRepeatScore, 100);
    // console.log("totalRepeatScore: " + totalRepeatScore);
    return totalRepeatScore;
}

function calculateBuzzCoefficientScore(nonBuzz: number, totalBuzz: number): number {
    let buzzCoefficient: number = totalBuzz/(totalBuzz + nonBuzz);
    let buzzCoefficientScore = (buzzCoefficient / allowedBuzzCoefficient) * 100;
    // console.log("buzzCoefficientScore: " + buzzCoefficientScore);
    if (buzzCoefficient > allowedBuzzCoefficient) {
        let buzzCoefficientDiff = Math.abs(buzzCoefficient - allowedBuzzCoefficient);
        buzzCoefficientScore = (1 - buzzCoefficientDiff) * 100;
        // console.log("buzzCoefficientDiff: " + buzzCoefficientDiff);
    }
    // console.log("buzzCoefficientScore: " + buzzCoefficientScore);
    return buzzCoefficientScore;
}

function randomizePower(maxPowerLevel: number) {
    let randomDecrementor = 
    Math.floor((Math.random() * (maxRandomPowerDecrementor)));
    let powerLevel = Math.max(1, maxPowerLevel - randomDecrementor);
    return powerLevel;
}

let testBuzz = new Buzzwords();
testBuzz.buzzwords = 
{
    "A": 0,
    "B": 0,
    "C": 0,
    "D": 0,
    "E": 0,
    "F": 0,
    "G": 0,
    "H": 0,
};
testBuzz.nonBuzz = 300;
testBuzz.totalBuzz = 300;

// console.log("power level: " + generatePowerLevel(testBuzz));
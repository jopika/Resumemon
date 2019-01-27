import {generateMoveSet} from "./MoveSetGenerator"
import {Buzzwords} from "./Buzzwords";

let mockSet: {[key: string]: number} = {
    "hello": 3,
    "world": 1,
    "basic": 100,
    "word1": 4,
    "word2": 4,
    "word3": 4,
    "word4": 4,
    "word5": 4,
};

let sumValue: number = 0;

for (let values of Object.keys(mockSet)) {
    sumValue += mockSet[values];
}

let mockBuzz: Buzzwords = {
    buzzwords: mockSet,
    nonBuzz: 500,
    totalBuzz: sumValue
};

console.log(generateMoveSet(mockBuzz));



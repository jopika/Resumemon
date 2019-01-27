import { Buzzwords } from "./Buzzwords";
import {Move} from "./Move";


let MIN_DAMAGE: number = 10;
let MAX_DAMAGE: number = 50;

export function generateMoveSet(buzzwordObj: Buzzwords): Set<Move> {
    let moveNames: Set<string> = new Set<string>();

    let density = generateCumulativeDensity(buzzwordObj);
    let buzzwordKeys = Object.keys(buzzwordObj.buzzwords);


    for (let i = 0; i < 4 && density.length > 0; i++) {

        // console.log(`Density: ${density.toString()}`);

        let selectedIndex = findCumulativeDensity(density, Math.random());

        // console.log(`Selected: ${selectedIndex}`);

        if (selectedIndex < 0) {
            console.log(`WARN: selected index is: ${selectedIndex}, density array is: ${density}`);
            i--;
            continue;
        }

        // console.log(`Selected: ${buzzwordKeys[selectedIndex]}`);

        moveNames.add(buzzwordKeys[selectedIndex]);

        let newBuzzwordKeys: string[] = [];
        for (let i = 0; i < buzzwordKeys.length; i++) {
            if (i !== selectedIndex) {
                newBuzzwordKeys.push(buzzwordKeys[i]);
            }
        }

        buzzwordKeys = newBuzzwordKeys;

        density.splice(selectedIndex, 1);

        // console.log(`After; Density: ${density}`);
        // console.log(`After; BuzzwordKey: ${buzzwordKeys}`);
        // console.log(`After: Types ${buzzwordKeys.length}`);
    }

    let moveSet: Set<Move> = new Set<Move>();

    for (let moveName of moveNames) {
        moveSet.add(new Move(moveName,
            generateDamage(buzzwordObj.buzzwords[moveName])
            // generateRandomInt(MAX_DAMAGE - MIN_DAMAGE) + MIN_DAMAGE)
            ));
    }

    return moveSet;
}


export function generateDamage(repeats: number): number {
    // return Math.floor(Math.random() * Math.floor(openMax) + 1);
    let damage = repeats * 10;
    if (repeats > 5) damage = 50;
    return damage;
}

export function generateCumulativeDensity(buzzwordObj: Buzzwords) : number[] {
    let currentProbability: number = 0;
    let wordNumerator = buzzwordObj.totalBuzz;

    let densityArray: number[] = [];

    let buzzwordMap = buzzwordObj.buzzwords;

    for (let keys of Object.keys(buzzwordMap)) {
        let delta = (buzzwordMap[keys] / wordNumerator);

        let itemDensity: number = currentProbability + delta;

        densityArray.push(itemDensity);

        currentProbability = itemDensity;
    }

    return densityArray;
}


function findCumulativeDensity(density: number[], slot: number) : number {
    let currentIndex = density.length - 1;

    while (currentIndex > 0) {
        if (slot >= density[currentIndex]) {
            return currentIndex;
        } else {
            currentIndex--;
        }
    }

    return density.length - 1;
}
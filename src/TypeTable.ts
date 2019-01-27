import {PokeType} from "./typeGenerator";

const DAMAGE_RESIST = 0.5;
const DAMAGE_NORMAL = 1.0;
const DAMAGE_EFFECTIVE = 2.0;

export class TypeTable {

    private lookupTable: Map<string, Map<string, number>>;

    constructor() {
        this.lookupTable = new Map();
        this.initialize();
    }

    public getDamageMultiplier(attacker: PokeType, defender: PokeType): number {
        return this.lookupTable.get(attacker).get(defender);
    }

    private initialize() {
        let fullTable: Map<string, Map<string, number>> = new Map();

//Normal
        let newRow: Map<string, number> = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_RESIST);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_RESIST);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.normal, newRow);

//Fighting
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_RESIST);
        newRow.set(PokeType.poison,DAMAGE_RESIST);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.bug,DAMAGE_RESIST);
        newRow.set(PokeType.ghost,DAMAGE_RESIST);
        newRow.set(PokeType.steel,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_RESIST);
        newRow.set(PokeType.ice,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fairy,DAMAGE_RESIST);
        fullTable.set(PokeType.fighting, newRow);

//Flying
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_RESIST);
        newRow.set(PokeType.bug,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.electric,DAMAGE_RESIST);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.flying, newRow);

//Poison
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_RESIST);
        newRow.set(PokeType.ground,DAMAGE_RESIST);
        newRow.set(PokeType.rock,DAMAGE_RESIST);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_RESIST);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_EFFECTIVE);
        fullTable.set(PokeType.poison, newRow);

//Ground
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_RESIST);
        newRow.set(PokeType.poison,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.bug,DAMAGE_RESIST);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fire,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_RESIST);
        newRow.set(PokeType.electric,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.ground, newRow);

//Rock
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_RESIST);
        newRow.set (PokeType.flying,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_RESIST);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.rock, newRow);

//Bug
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_RESIST);
        newRow.set (PokeType.flying,DAMAGE_RESIST);
        newRow.set(PokeType.poison,DAMAGE_RESIST);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_RESIST);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fairy,DAMAGE_RESIST);
        fullTable.set(PokeType.bug, newRow);

//Ghost
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_RESIST);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.steel,DAMAGE_NORMAL);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_RESIST);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.ghost, newRow);

//Steel

        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_RESIST);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_RESIST);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_EFFECTIVE);
        fullTable.set(PokeType.steel, newRow);

//Fire
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set (PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_RESIST);
        newRow.set(PokeType.bug,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_RESIST);
        newRow.set(PokeType.grass,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dragon,DAMAGE_RESIST);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.fire, newRow);

//Water
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.rock,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_NORMAL);
        newRow.set(PokeType.fire,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.water,DAMAGE_RESIST);
        newRow.set(PokeType.grass,DAMAGE_RESIST);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_RESIST);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.water, newRow);

//Grass
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_RESIST);
        newRow.set(PokeType.poison,DAMAGE_RESIST);
        newRow.set(PokeType.ground,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.rock,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.bug,DAMAGE_RESIST);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.grass,DAMAGE_RESIST);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_RESIST);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.grass, newRow);

//Electric
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_RESIST);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_NORMAL);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.grass,DAMAGE_RESIST);
        newRow.set(PokeType.electric,DAMAGE_RESIST);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_RESIST);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.electric, newRow);

//Psychic
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_RESIST);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_RESIST);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.psychic, newRow);

//Ice
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set (PokeType.flying,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_RESIST);
        newRow.set(PokeType.grass,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_RESIST);
        newRow.set(PokeType.dragon,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.ice, newRow);

//Dragon
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_NORMAL);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dark,DAMAGE_NORMAL);
        newRow.set(PokeType.fairy,DAMAGE_RESIST);
        fullTable.set(PokeType.dragon, newRow);

//Dark
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_RESIST);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_NORMAL);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.steel,DAMAGE_NORMAL);
        newRow.set(PokeType.fire,DAMAGE_NORMAL);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_NORMAL);
        newRow.set(PokeType.dark,DAMAGE_RESIST);
        newRow.set(PokeType.fairy,DAMAGE_RESIST);
        fullTable.set(PokeType.dark, newRow);

//Fairy
        newRow = new Map();
        newRow.set(PokeType.normal,DAMAGE_NORMAL);
        newRow.set(PokeType.fighting,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.flying,DAMAGE_NORMAL);
        newRow.set(PokeType.poison,DAMAGE_RESIST);
        newRow.set(PokeType.ground,DAMAGE_NORMAL);
        newRow.set(PokeType.rock,DAMAGE_NORMAL);
        newRow.set(PokeType.bug,DAMAGE_NORMAL);
        newRow.set(PokeType.ghost,DAMAGE_NORMAL);
        newRow.set(PokeType.steel,DAMAGE_RESIST);
        newRow.set(PokeType.fire,DAMAGE_RESIST);
        newRow.set(PokeType.water,DAMAGE_NORMAL);
        newRow.set(PokeType.grass,DAMAGE_NORMAL);
        newRow.set(PokeType.electric,DAMAGE_NORMAL);
        newRow.set(PokeType.psychic,DAMAGE_NORMAL);
        newRow.set(PokeType.ice,DAMAGE_NORMAL);
        newRow.set(PokeType.dragon,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.dark,DAMAGE_EFFECTIVE);
        newRow.set(PokeType.fairy,DAMAGE_NORMAL);
        fullTable.set(PokeType.fairy, newRow);
    }
}


// export function getDamageMultiplier(attacker: PokeType, defender: PokeType);: number {
//
//
//     return 0;
// }
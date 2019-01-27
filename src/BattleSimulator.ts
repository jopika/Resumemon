import {Pokemon} from "./Pokemon";
import {TypeTable} from "./TypeTable";

export class BattleSimulator {

    private typeTable: TypeTable;

    constructor() {
        this.typeTable = new TypeTable();
    }

    /**
     * Simulates battle with p1 and p2 until one of the player's hp reachs 0
     * @param {Pokemon} p1: first player participating in battle
     * @param {Pokemon} p2: second player participating in battle
     */
    public battle(p1: Pokemon, p2: Pokemon): Array<string> {
        let eventLog: Array<string> = [];

        let turn = 1;
        let activePlayer: Pokemon;
        let defPlayer: Pokemon;

        // sets activePlayer randomly
        let diceRoll = Math.floor(Math.random() * 2 + 1);
        if (diceRoll === 1) {
            activePlayer = this.generateNewPokemon(p1);
            defPlayer = this.generateNewPokemon(p2);
        } else {
            activePlayer = this.generateNewPokemon(p2);
            defPlayer = this.generateNewPokemon(p1);
        }

        activePlayer.name = activePlayer.name.toUpperCase();
        defPlayer.name = defPlayer.name.toUpperCase();

        console.log(activePlayer.name + " has won the dice role and will be going first.");
        eventLog.push(`${activePlayer.name} has won the dice role and will be going first.`);

        // battle while both players are alive
        while (activePlayer.health > 0 && defPlayer.health > 0) {
            console.log("Turn " + turn + ": it is " + activePlayer.name + "'s turn.");
            eventLog.push(`Turn ${turn}: it is ${activePlayer.name}'s turn.`);

            eventLog.push(this.attack(activePlayer, defPlayer));
            // eventLog.push(`${activePlayer.name} HP: ${activePlayer.health} --- ${defPlayer.name} HP: `)
            // if def player has no more hp, end the battle
            // activePlayer wins
            if (defPlayer.health  <= 0) {
                console.log(defPlayer.name + " has fainted.");
                eventLog.push(`${defPlayer.name} has fainted.`);
                console.log(activePlayer.name + " has won the battle!");
                eventLog.push(`${activePlayer.name} has won the battle!`);
                return eventLog;
            }
            // switch active and defending player
            let holder = defPlayer;
            defPlayer = activePlayer;
            activePlayer = holder;
            turn++;
        }
    }

    /**
     * attacking player attacks defending player, deducting damage from defending
     * player's health
     * @param {Pokemon} att: attacking player
     * @param {Pokemon} def: defending player
     */
    private attack(att: Pokemon,def: Pokemon): string {
        let multiplier = this.typeTable.getDamageMultiplier(att.type, def.type);
        let attMove = att.pickAttack();
        let moveName = attMove.name;
        let damage = attMove.damage * multiplier;
        console.log(att.name + " uses " + moveName + ". It does " + damage + " damage!");
        // let smallEventLog: Array<string> = [];
        // smallEventLog.push(this.updateHealth(def, damage));
        return `${att.name} uses ${moveName.toUpperCase()}. It does ${damage} damage!
        ${this.updateHealth(def, damage)}`;
    }

    /**
     * Changes p's health by amt
     * @param {Pokemon} p: pokemon whose health needs modification
     * @param {number} amt: amount of health to change
     */
    private updateHealth(p: Pokemon, amt: number): string {
        p.health -= amt;
        if (p.health < 0) {
            p.health = 0;
        }
        console.log(p.name + " has " + p.health + " HP left.");
        return `${p.name} has ${p.health} HP left.`;
    }

    private generateNewPokemon(src: Pokemon): Pokemon {
        const obj: any = Object.create(Pokemon.prototype);
        for (const key of Object.keys(src)) {
            obj[key] = (src as any)[key];
        }
        return obj as Pokemon;
    }

}

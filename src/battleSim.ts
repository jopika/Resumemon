import {Pokemon} from "./Pokemon";
import {TypeTable} from "./TypeTable";

export class battleSim {

    constructor() {

    }

    /**
     * Simulates battle with p1 and p2 until one of the player's hp reachs 0
     * @param {Pokemon} p1: first player participating in battle
     * @param {Pokemon} p2: second player participating in battle
     */
    public battle(p1: Pokemon, p2: Pokemon) {
        let turn = 1;
        let activePlayer: Pokemon;
        let defPlayer: Pokemon;
        // sets activePlayer randomly
        let diceRoll = Math.floor(Math.random() * 2 + 1);
        if (diceRoll === 1) {
            activePlayer = p1;
            defPlayer = p2;
        } else {
            activePlayer = p2;
            defPlayer = p1;
        }
        console.log(activePlayer.name + " has won the dice role and will be going first.");

        // battle while both players are alive
        while (p1.health > 0 && p2.health > 0) {
            console.log("Turn " + turn + ": it is " + activePlayer.name + "'s turn.");
            this.attack(activePlayer, defPlayer);
            // if def player has no more hp, end the battle
            // activePlayer wins
            if (defPlayer.health  <= 0) {
                console.log(defPlayer.name + " has fainted.");
                console.log(activePlayer.name + " has won the battle!");
                return;
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
    private attack(att: Pokemon,def: Pokemon) {
        let multiplier = new TypeTable().getDamageMultiplier(att.type, def.type);
        let attMove = att.pickAttack();
        let moveName = attMove.name;
        let damage = attMove.damage * multiplier;
        console.log(att.name + " uses " + moveName + ". It does " + damage + " damage!");
        this.updateHealth(def, damage);
    }

    /**
     * Changes p's health by amt
     * @param {Pokemon} p: pokemon whose health needs modification
     * @param {number} amt: amount of health to change
     */
    private updateHealth(p: Pokemon, amt: number) {
        p.health -= amt;
        console.log(p.name + " has " + p.health + " HP left.");
    }
}

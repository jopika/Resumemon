import express from "express";
import {parse} from "./parse";
import { generatePowerLevel } from "./powerLevel";
import {generateMoveSet} from "./MoveSetGenerator";
import {getType, PokeType} from "./typeGenerator";
import {Pokemon} from "./Pokemon";
import {Move} from "./Move";
import {getPokemonByType} from "./pokemonGenerator";
import {getPokemonImageString} from "./pokemonSpriteGenerator";
import {BattleSimulator} from "./BattleSimulator";
const fs = require('fs');
const multer = require('multer');

const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called "uploads"
});

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/../src/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../src/public/index.html');
});

app.post('/', upload.array('file-to-upload', 2), (req, res) => {
    const pokemons: Promise<Pokemon>[] = [];
    for (const file of (req.files as Express.Multer.File[])) {
        let pdfData = fs.readFileSync('uploads/' + file.filename);
        let buzzwordsData = fs.readFileSync('buzzwords.txt').toString().trim().toLowerCase();
        // Delete uploaded resume from our uploads folder once we're done reading it
        if (fs.existsSync('uploads/' + file.filename)) {
            fs.unlinkSync('uploads/' + file.filename);
        }
        let globalBuzzwords = buzzwordsData.split('\n');

        // Parse the resume and do stuff with the returned Buzzwords object
        pokemons.push(parse(pdfData, globalBuzzwords).then(function (buzzwords: any) {
            let powerLevel: number = generatePowerLevel(buzzwords);
            let moveSet: Set<Move> = generateMoveSet(buzzwords);
            let type: PokeType = getType();
            let name: string = getPokemonByType(type as string);
            let imgUrl: string = getPokemonImageString(name);
            let pokemon: Pokemon = new Pokemon(name, powerLevel, type, moveSet, imgUrl);
            return pokemon;
            //console.log(buzzwords);
            //console.log(generatePowerLevel(buzzwords));
            //console.log(generateMoveSet(buzzwords));
            //console.log(getType());
        }));
    }

    Promise.all(pokemons).then((pokemons) => {
        if (pokemons.length > 1) {
            // simulate a battle
            let simulator: BattleSimulator = new BattleSimulator();
            let eventLog: Array<string> = simulator.battle(pokemons[0], pokemons[1]);

            res.render('pkmn', {
                pokemons: pokemons,
                eventLog: eventLog,
            })

        } else {
            res.render('pkmn', {
                pokemons: pokemons,
                eventLog: [],
            });
        }

    })
});

app.post('/', upload.single('second-file-to-upload'), (req, res) => {

}) ;

app.listen(3000);

export function run() {

}

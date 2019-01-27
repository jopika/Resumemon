import express from "express";
import {parse} from "./parse";
import { generatePowerLevel } from "./powerLevel";
import {generateMoveSet} from "./MoveSetGenerator";
import {getType, PokeType} from "./typeGenerator";
import {Pokemon} from "./Pokemon";
import {Move} from "./Move";
const fs = require('fs');
const multer = require('multer');

const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called "uploads"
});

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + '/../src/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../src/public/index.html');
});

app.post('/', upload.single('file-to-upload'), (req, res) => {
    let pdfData = fs.readFileSync('uploads/' + req.file.filename);
    let buzzwordsData = fs.readFileSync('buzzwords.txt').toString().trim().toLowerCase();
    // Delete uploaded resume from our uploads folder once we're done reading it
    if (fs.existsSync('uploads/' + req.file.filename)) {
        fs.unlinkSync('uploads/' + req.file.filename);
    }
    let globalBuzzwords = buzzwordsData.split('\n');

    // Parse the resume and do stuff with the returned Buzzwords object
    parse(pdfData, globalBuzzwords).then(function(buzzwords: any){
        let powerLevel: number = generatePowerLevel(buzzwords);
        let moveSet: Set<Move> = generateMoveSet(buzzwords);
        let type: PokeType = getType();
        let pokemon: Pokemon = new Pokemon("Pikachu", powerLevel, type, moveSet);
        console.log(pokemon);
        //console.log(buzzwords);
        //console.log(generatePowerLevel(buzzwords));
        //console.log(generateMoveSet(buzzwords));
        //console.log(getType());
    });
    res.redirect('/pkmn.html');
});

app.listen(3000);

export function run() {

}

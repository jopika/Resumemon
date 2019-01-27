import express from "express";
import {parse} from "./parse";
import { generatePowerLevel } from "./powerLevel";
const fs = require('fs');

const app = express();

app.set("port", process.env.PORT || 3000);

export function run() {
    let pdfData = fs.readFileSync('src/jinnybyun_resume.pdf');
    let buzzwordsData = fs.readFileSync('buzzwords.txt').toString().trim().toLowerCase();
    let globalBuzzwords = buzzwordsData.split('\n');

    parse(pdfData, globalBuzzwords).then(function(buzzwords: any){
        console.log(buzzwords);
        console.log(generatePowerLevel(buzzwords));
    });
}

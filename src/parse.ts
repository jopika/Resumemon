import {Buzzwords} from "./Buzzwords";
const pdf = require('pdf-parse');
const fs = require('fs');

export function parse() {
    let dataBuffer = fs.readFileSync('/home/jinny/jinnybyun_resume.pdf');

    pdf(dataBuffer).then(function(data: any) {
        let resume: string = data.text;
        resume = resume.toLowerCase();

        let buzzwords: Buzzwords = new Buzzwords();
        let totalBuzzwords: number = 0;
        let globalBuzzwords = ['software engineering', 'president'];
        for (let word of globalBuzzwords) {
            let regexp = new RegExp(word, 'g');
            let count: number = (resume.match(regexp) || []).length;
            buzzwords.buzzwords[word] = count;
            totalBuzzwords += count;
        }
        buzzwords.totalBuzz = totalBuzzwords;
        console.log(buzzwords);
    });


}
parse();
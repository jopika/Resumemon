import {Buzzwords} from "./Buzzwords";
const pdf = require('pdf-parse');
const sw = require('stopword')

export function parse(pdfData: any, globalBuzzwords: string[]) {

    return pdf(pdfData).then(function(data: any) {
        let oldResume: string = data.text;
        oldResume = oldResume.toLowerCase();
        let resumeArr = sw.removeStopwords(oldResume.trim().split(/\s+/));
        let nonBuzzwords = resumeArr.length;

        let resume: String = resumeArr.join(" ");
        resume = resume.trim();

        let buzzwords: Buzzwords = new Buzzwords();
        let totalBuzzwords: number = 0;
        for (let word of globalBuzzwords) {
            let regexp = new RegExp('\\W'+word+'\\W', 'g');
            let count: number = (resume.match(regexp) || []).length;
            if (count > 0) {
                buzzwords.buzzwords[word] = count;
                totalBuzzwords += count;
            }
        }
        nonBuzzwords -= totalBuzzwords;
        buzzwords.nonBuzz = nonBuzzwords;
        buzzwords.totalBuzz = totalBuzzwords;

        return buzzwords;
    });
}


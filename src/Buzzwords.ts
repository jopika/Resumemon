export class Buzzwords {
    buzzwords: {[key: string]: number};
    nonBuzz: number; // number of non-buzzwords in document
    totalBuzz: number; // total number of buzzwords in document

    constructor() {
        this.buzzwords = {};
        this.nonBuzz = 0;
        this.totalBuzz = 0;
    }
}
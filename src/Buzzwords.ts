export class Buzzwords {
    buzzwords: {[key: string]: number};
    nonBuzz: number;
    totalBuzz: number;

    constructor() {
        this.buzzwords = {};
        this.nonBuzz = 0;
        this.totalBuzz = 0;
    }
}
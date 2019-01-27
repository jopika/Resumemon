export class Buzzwords {
    buzzwords: {[key: string]: number};
    nonBuzz: number;

    constructor() {
        this.buzzwords = {};
        this.nonBuzz = 0;
    }
}
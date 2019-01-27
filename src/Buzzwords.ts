export class Buzzwords {
    private buzzwords: {[key: string]: number};
    private nonBuzz: number;
    private totalBuzz: number;

    constructor() {
        this.buzzwords = {};
        this.nonBuzz = 0;
        this.totalBuzz = 0;
    }
}
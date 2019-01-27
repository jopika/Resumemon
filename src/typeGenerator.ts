import {Buzzwords} from "./Buzzwords";


export class typeGenerator {
    constructor() {
    }

    /**
     * Given a list of buzzwords, return a pokemon type based on how many of those words
     * fall into certain categories
     * @param {Buzzwords} bw: list of buzzwords to relate
     * @returns {pokeType}: type of pokemon
     */
    public computeType(bw: Buzzwords): pokeType {
        return pokeType.normal; // stub
    }

    /**
     *
     * @param {Buzzwords} bw: list of buzzwords
     * @returns {number}: number corresponding to group
     */
    private getGroup(bw: Buzzwords): number {
        let mobile:Set<String> = new Set<String>(["android", "android studio code", "app", "mobile"]);
        let internet:Set<String> = new Set<String>(["web design", "blockchain", "server", "cloud computing", "distributed system",
                                                          "ajax", "html", "css", "api", "rest"]);
        let frontend:Set<String> =  new Set<String>(["ui/ux designer", "html", "css"]);
        let management:Set<String> = new Set<String>(["project manager", "customer focused", "leadership"]);
        let progTerms:Set<String> = new Set<String>(["software engineering", "agile", "algorithm", "design pattern",
                                                           "front-end", "linux", "full-stack", "unix", "bash", "scalability",
                                                           "back-end", "github"]);
        let languages:Set<String> = new Set<String>(["c", "sql", "c++", "c#", "javascript", "java", "kotlin", "python",
                                                           "typescript", "html", "css", "node.js", "golang", "docker", "kubernetes"]);
        let database:Set<String> =  new Set<String>(["mysql", "cassandra", "postgres", "cockroachdb", "mongodb"]);
        let ml:Set<String> = new Set<String>(["machine learning", "computer vision", "data mining", "aritificial intelligence"]);
        let security:Set<String> = new Set<String>(["security", "encryption"]);

        let groupArray: Array<Set<String>> = [mobile, internet, frontend, management, progTerms, languages, database, ml, security];

        for (let g of groupArray) {

        }

        return 0

    }




    /** Documentation for groups:
     * 1: Mobile Development
     * 2: Internet/Network
     * 3: Forntend
     * 4: Management
     * 5: Programming Terms
     * 6: Languages:
     * 7: Databases
     * 8: ML
     * 9: Security
     */
}

/**
 * Types of pokemon available
 */
export enum pokeType {
    normal, // languages
    fighting, // Management
    flying,  // Mobile development
    poison, // frontend
    ground, // languages
    rock, // database
    bug,  // frontend
    ghost, // Internet/Network Stuff
    fire, // Security
    water, // Programming Terms
    grass, // languages
    electric, // security
    psychic, // ML
    ice, // Programming Terms
    dragon, // Mobile Development
}
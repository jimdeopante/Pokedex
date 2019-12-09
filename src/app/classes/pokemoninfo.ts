export class PokemonInfo {
    public weight: number;
    public height: number;
    public type: string;
    public imagesrc: string;

    constructor(weight: number, height: number, type: string, imagesrc: string) {
       this.weight = weight;
       this.height = height;
       this.type = type;
       this.imagesrc = imagesrc;
    }
}
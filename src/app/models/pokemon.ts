export class Pokemon {
    public name: string;
    public number: number;
    public image: string;
    public url: string;

    constructor(name: string, num: number, image: string) {
       this.name = name;
       this.number = num;
       this.image = image;
       this.url = 'https://pokeapi.co/api/v2/pokemon/' + num;
    }
}




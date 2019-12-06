import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonAPI } from '../models/pokemonapi';
import { PokemonDetails } from '../models/pokemondetails';
import { Pokemon } from '../models/pokemon';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

pokemon: {}[] = [];
pokemons;
name: string[];
num = [];
number: number[];
picturelink: string[];
n: number;
url;
next;
prev;
pokemonurl;
spritespic;
details;
modal; 

abilities:string[]=[];
weight:number[]=[];
height:number[]=[];
type:string[]=[];
size = 807;
pokenum = '000';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';
pokemonListObj:Pokemon[]=[]; 

// source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;


  constructor(private nameservice: NameService) { }



  ngOnInit() {
 this.getPokemons();
  }

  getPokemons() {
    this.nameservice.getPokemon()
    .subscribe((data: PokemonAPI[]) => {
      this.pokemons = data.results;
     
      // this.next = data.next;
      // this.prev = data.previous;
      // this.details = data.results[1].name;
      
      for (let i = 0; i < this.size; i++) {
        this.pokemonListObj.push(new Pokemon (`${data.results[i].name}`, data.results[i].url.substring(34, 37).split('/')[0], 
        `${this.serebiisrc}${(i+1).toString().padStart(3, '0')}${this.extsn}`));
        console.log(this.pokemonListObj[0].name)
      // let pokemonObj: {
      //   name: string data.results[i].name,
      //   number: data.results[i].url.substring(34, 37).split('/')[0]
      // }
      // console.log(this.name)
      //console.log(this.pokemonListObj)
        // this.name.push(data.results[i].name);
          // console.log(this.name)
          //return this.pokemonListObj.push()
      }
      //console.log(this.pokemonListObj)

      for (let j = 0; j < this.size; j++) {
          this.url = data.results[j].url;
          // console.log(this.url)
          // this.num.push((this.number.substring(34, 37).split('/'))[0]);
          this.number = this.url.substring(34, 37).split('/')[0]
          // console.log(this.number)
          // this.getInfo(this.number)
      }

return forkJoin([name, this.number, this.url])
      // this.spritespic = data.results.sprites.front_default;
      // console.log(this.spritespic);
    });

  }

 

  getInfo(n: number) {
    this.nameservice.getDetails((this.url).substring(0, 34)+this.number)
    .subscribe((data: PokemonDetails[]) => {
      this.weight = data.weight;
      this.height = data.height;
      //  this.type = data.types[0].type[0].name;

      // console.log(this.weight)
      // console.log(this.height)
      // // console.log(this.type)
      // console.log(data);

      //   for (let k = 0; k < this.size; k++) {
      //   this.weight = data[k].weight;
      //   // console.log(this.weight)
      // }
    });
  }

compilePokemon() {
  for (let p = 0; p<this.size; p++) {
    // console.log(this.name)
    this.pokemon.push(this.name[p], this.number[p])
    // console.log(this.pokemon)
  }
}

  // changeNext(next: string) {
  //   this.nameservice.getNext(next);
  //   this.getService();
  //   }

  // changePrev(prev: string) {
  //     this.nameservice.getPrev(prev);
  //     this.getService();
  //     }
  
  // getNumber(num: string) {
  //   this.number = '#' + (num).slice(-2).split('/');
  // }



  // getDescription(details: string) {
  //   this.nameservice.getDetails(details);
  //   this.getService();
  // }
  // getID(id: string) {
  //   this.id = results.url;
  // }



}



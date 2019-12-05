import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonAPI } from '../models/pokemons';
import { PokemonDetails } from '../models/pokemondetails';
import { getDefaultService } from 'selenium-webdriver/chrome';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

pokemons;
name = [];
num = [];
n = [];
next;
prev;
pokemonurl;
spritespic;
details;
modal; 
number;
weight;
size = 807;
pokenum = '000';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';

// source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;


  constructor(private nameservice: NameService) { }



  ngOnInit() {
 this.getService();
  }

  getService() {
    this.nameservice.getPokemon()
    .subscribe((data: PokemonAPI[]) => {
      this.pokemons = data.results;
      this.next = data.next;
      this.prev = data.previous;
      this.details = data.results[1].name;
      
      for (let i = 0; i < this.size; i++) {
          this.name = data.results[i].name;
          console.log(this.name)
      }

      for (let j = 0; j < this.size; j++) {
          this.number = data.results[j].url;
          this.num = (this.number).substring(34, 37).split('/');
          this.n = this.num[0];
          console.log(this.n)
      }


      // this.spritespic = data.results.sprites.front_default;
      // console.log(this.spritespic);
    });
  }

  // getInfo() {
  //   this.nameservice.getPokemon()
  //   .subscribe((data: PokemonDetails[]) => {
  //     this.weight = data.weight;
  //       for (let k = 0; k < this.size; k++) {
  //       this.weight = data.results[k].weight;
  //       console.log(this.weight)
  //     }
  //   });
  // }



  changeNext(next: string) {
    this.nameservice.getNext(next);
    this.getService();
    }

  changePrev(prev: string) {
      this.nameservice.getPrev(prev);
      this.getService();
      }
  
  getNumber(num: string) {
    this.number = '#' + (num).slice(-2).split('/');
  }



  // getDescription(details: string) {
  //   this.nameservice.getDetails(details);
  //   this.getService();
  // }
  // getID(id: string) {
  //   this.id = results.url;
  // }



}



import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonAPI } from '../pokemons';
import { getDefaultService } from 'selenium-webdriver/chrome';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
pokemons;
next;
prev;
url;
i;
spritespic;
details;
modal;
number;
pokenum = '000';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';

// source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;


  constructor(private nameservice: NameService) { }

  ngOnInit() {
 this.getService();
  }

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

  getService() {
    this.nameservice.getPokemon()
    .subscribe((data: PokemonAPI[]) => {
      this.pokemons = data.results;
      this.next = data.next;
      this.prev = data.previous;
      // this.details = data.results.url.weight;
      // this.spritespic = data.results.sprites.front_default;
      // console.log(this.spritespic);
    });
  }



}

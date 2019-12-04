import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { Pokemons } from '../pokemons';
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
i = 1;



// i = 0;

pokenum = '000';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
extsn = '.png';
source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;

  constructor(private nameservice: NameService) { }

  ngOnInit() {
 this.getService();
  }

  changenext(next: string) {
    this.nameservice.getNext(next);
    this.getService();
    }

  changeprev(prev: string) {
      this.nameservice.getPrev(prev);
      this.getService();
      }

  getID(id: string) {
    this.id = results.url;
  }

  getService() {
    this.nameservice.getPokemon()
    .subscribe((data: Pokemons[]) => {
      this.pokemons = data.results;
      this.next = data.next;
      this.prev = data.previous;
    });
  }




}

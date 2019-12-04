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

// i = 0;
pokenum = '000';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
extsn = '.png';


  constructor(private nameservice: NameService) { }

  ngOnInit() {
 this.getService();
  }

  change(next: string) {
    this.nameservice.getNext(next);
    this.getService();
    }

  getService() {
    this.nameservice.getPokemon()
    .subscribe((data: Pokemons[]) => {
      this.pokemons = data.results;
    });
  }


}

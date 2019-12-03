import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { Pokemons } from '../pokemons';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
pokemons;

  constructor(private nameservice: NameService) { }

  ngOnInit() {
    this.nameservice.getPokemon()
    .subscribe((data: Pokemons[]) => {
      console.log('Data', data);
      this.pokemons = data;
    });
  }

}

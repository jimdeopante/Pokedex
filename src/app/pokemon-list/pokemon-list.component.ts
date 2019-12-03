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
next;

i = 0;
imgsrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
extsn = ".png"

//ctr = this.i++;



  constructor(private nameservice: NameService) { }

  ngOnInit() {
    this.nameservice.getPokemon()
    .subscribe((data: Pokemons[]) => {
      // console.log('Data', data);
      this.pokemons = data.results;
      this.next = data.next.results;
      console.log(this.next);
      // (this.ctr);
    });
  }
  
  // nextBtn() {
  //   this.nameservice.getPokemon()
  //   .subscribe((data: Pokemons[]) => {
  //     this.next = data.next;
  //     console.log(this.next);
  //   });
  // }

}

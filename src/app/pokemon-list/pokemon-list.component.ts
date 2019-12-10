import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../pokemonAPI.service';
import { PokemonAPI } from '../models/pokemonapi';
import { Pokemon } from '../classes/pokemon';
import { getDefaultService } from 'selenium-webdriver/chrome';
import {MatDialog, MatDialogConfig} from "@angular/material"
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonTypes } from '../models/pokemontypes';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
// @Input() searchVal: string;
@Input() typesLink: any;
@Input() searchInput: any;


name: string[];
number: number[];
url;
pokemonurl;
lastTypesLink;
lastSearchInput;
pokemonType;
size = 807;
pokenum = '000';
pokemonsURL = 'https://pokeapi.co/api/v2/pokemon?limit='+this.size;
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';
pokemonListObj:Pokemon[]=[]; 
pokemonFilteredObj:Pokemon[]=[];

  constructor(private pokeservice: APIService, private dialog: MatDialog) { }

  ngOnInit() {
 this.getPokemons();
  }

  getPokemons() {
    this.pokeservice.getPokemon(this.pokemonsURL)
    .subscribe((data: PokemonAPI[]) => {  
      for (let i = 0; i < this.size; i++) {      
        this.pokemonListObj.push(new Pokemon (`${data.results[i].name}`, 
        data.results[i].url.substring(34, 37).split('/')[0], 
        `${this.serebiisrc}${(i+1).toString().padStart(3, '0')}${this.extsn}`),); 
      }
    });

  }

  openDialog(url: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      pokemonurl: url
  };

    this.dialog.open(PokemonDetailsComponent, dialogConfig); 
  }

  // ngOnChanges() {
  //   if (this.lastTypesLink !== this.typesLink || this.lastSearchInput !== this.searchInput) {
  //     if (this.typesLink !== undefined) {
  //       if (this.typesLink === '') {
  //         this.getPokemons();
  //       } else {
  //         this.pokeservice.getPokemonTypes(this.typesLink).subscribe((data: PokemonTypes[]) => {
  //           for (let i = 0; i < this.size; i++) {
  //           this.pokemonFilteredObj.push(new Pokemon (`${data.pokemon[i].pokemon.name}`, 
  //           data.pokemon[i].pokemon.url.substring(34, 37).split('/')[0], 
  //           `${this.serebiisrc}${(i+1).toString().padStart(3, '0')}${this.extsn}`),);            
  //           console.log(this.pokemonFilteredObj[0])
  //           }
  //         });
  //       }
  //     }
  //   }
  // }

}



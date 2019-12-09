import { Component, OnInit, Input } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonAPI } from '../models/pokemonapi';
import { Pokemon } from '../classes/pokemon';
import { getDefaultService } from 'selenium-webdriver/chrome';
import {MatDialog, MatDialogConfig} from "@angular/material"
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
// @Input() searchVal: string;
@Input() typesLink: any;
@Input() searchInput: any;

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
size = 807;
pokenum = '000';
pokemonsURL = 'https://pokeapi.co/api/v2/pokemon?limit=807';
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';
pokemonListObj:Pokemon[]=[]; 

// source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;


  constructor(private pokeservice: NameService, private dialog: MatDialog) { }



  ngOnInit() {
 this.getPokemons();
  }

  getPokemons() {
    this.pokeservice.setUrl(this.pokemonsURL);
    this.pokeservice.getPokemon()
    .subscribe((data: PokemonAPI[]) => {  
      for (let i = 0; i < this.size; i++) {      
        this.pokemonListObj.push(new Pokemon (`${data.results[i].name}`, 
        data.results[i].url.substring(34, 37).split('/')[0], 
        `${this.serebiisrc}${(i+1).toString().padStart(3, '0')}${this.extsn}`),); 
      }
    });

  }

  openDialog(url: string, imagelink: string) {
    console.log(imagelink);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      pokemonurl: url
  };

    this.dialog.open(PokemonDetailsComponent, dialogConfig); 
  }





}



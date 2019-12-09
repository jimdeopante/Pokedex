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
@Input() searchVal: string;

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
imgsrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';
pokemonListObj:Pokemon[]=[]; 

// source = `${this.imgsrc}${(this.pokenum + ( this.i++ )).slice(-3)}${this.extsn}`;


  constructor(private nameservice: NameService, private dialog: MatDialog) { }



  ngOnInit() {
 this.getPokemons();
  }

  getPokemons() {
    this.nameservice.getPokemon()
    .subscribe((data: PokemonAPI[]) => {
      // this.pokemons = data.results;
     
      // this.next = data.next;
      // this.prev = data.previous;
      // this.details = data.results[1].name;

      
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
      pokemonurl: url,
      pokemonimage: imagelink,
  };

    this.dialog.open(PokemonDetailsComponent, dialogConfig); 
  }

 


  // changeNext(next: string) {
  //   this.nameservice.getNext(next);
  //   this.getPokemons();
  //   }

  // changePrev(prev: string) {
  //     this.nameservice.getPrev(prev);
  //     this.getPokemons();
  //     }






}



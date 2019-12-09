import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonAPI } from '../models/pokemonapi';
import { Pokemon } from '../models/pokemon';
import { getDefaultService } from 'selenium-webdriver/chrome';
import {MatDialog, MatDialogConfig} from "@angular/material"
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { stringify } from 'querystring';





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
weight:number;
height:number[]=[];
type:string[]=[];
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
        // console.log(this.pokemonListObj[0].name)
        // this.nameservice.setUrl(data.results[i].url){
        //   console.log(data);
        // }
      }
     
    //   for (let j = 0; j < this.size; j++) {
    //     this.url = data.results[j].url;
    //     // console.log(this.url)
    //     // this.num.push((this.number.substring(34, 37).split('/'))[0]);
    //     this.number = this.url.substring(34, 37).split('/')[0]
    //     // console.log(this.number)
    // }



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



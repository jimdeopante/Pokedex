import { Component, OnInit, Input, Inject } from '@angular/core';
import { NameService } from '../name.service';
import { PokemonDetails } from '../models/pokemondetails';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { PokemonInfo } from '../classes/pokemoninfo';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
// @Input() Url: url;
url: string;
name: string;
weight: number;
height: number;
types: Object[];
image: string;
id: number;
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';

// pokemonDetailObj:PokemonInfo[]=[]; 

  constructor(
    private nameservice: NameService,
    private dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
this.url = data.pokemonurl;
this.image = data.imagelink;
    }

  ngOnInit() {
    console.log(this.url);
    console.log(this.image);
    this.nameservice.getDetails(this.url)
    .subscribe((data: PokemonDetails[]) => {
      this.name = data.name;
      this.id = data.id;
      // (weight: number, height: number, type: string, imagesrc: string)
      // this.pokemonDetailObj.push(new PokemonInfo (data.weight, data.height, data.types, 
      //   `${this.serebiisrc}${(this.id).toString().padStart(3, '0')}${this.extsn}` )); 
      //   console.log(this.pokemonDetailObj)
      this.weight = data.weight;
      this.height = data.height;
      this.types = data.types;
     
      this.image = `${this.serebiisrc}${(this.id).toString().padStart(3, '0')}${this.extsn}`;
      console.log(this.id)
      console.log(this.weight);
      
    })

  }

  

  // getInfo() {
  //   for (let i = 0; i < this.size; i++) {
  //   this.nameservice.getDetails(this.pokemonURL+i)
  //   .subscribe((data: PokemonDetails[]) => {
  //     this.weight = data.weight;
  //     this.height = data.height;
      //  this.type = data.types[0].type[0].name;

      // console.log(this.weight)
      // console.log(this.height)
      // // console.log(this.type)
      // console.log(data);

      //   for (let k = 0; k < this.size; k++) {
      //   this.weight = data[k].weight;
      //   // console.log(this.weight)
      // }
    

}

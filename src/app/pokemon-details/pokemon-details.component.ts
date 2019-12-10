import { Component, OnInit, Input, Inject } from '@angular/core';
import { APIService } from '../pokemonAPI.service';
import { PokemonDetails } from '../models/pokemondetails';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
// @Input() Url: url;
url: string;
name: string[];
weight: number[];
height: number[];
types: Object[];
image: string;
id: number;
serebiisrc= 'https://www.serebii.net/pokemon/art/';
extsn = '.png';


  constructor(
    private detailsservice: APIService,
    private dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
this.url = data.pokemonurl;
this.image = data.imagelink;
    }

  ngOnInit() {
    console.log(this.url);
    console.log(this.image);
    this.detailsservice.getDetails(this.url)
    .subscribe((data: PokemonDetails[]) => {
      this.name = data.name;
      this.id = data.id;
      this.weight = data.weight;
      this.height = data.height;
      this.types = data.types;
     
      this.image = `${this.serebiisrc}${(this.id).toString().padStart(3, '0')}${this.extsn}`;
      console.log(this.id)
      console.log(this.weight);
      
    })

  }
}

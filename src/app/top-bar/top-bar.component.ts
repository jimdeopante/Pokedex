import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APIService } from '../pokemonAPI.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
@Output() selectedType = new EventEmitter();
@Output() searchedTerm = new EventEmitter();
chosen = '';
searchTerm = new FormControl();
typesUrl = 'https://pokeapi.co/api/v2/type/';
types;
  constructor(private typeservice: APIService) { }

  ngOnInit() {
    this.typeservice.getPokemon(this.typesUrl).subscribe(response => {
      this.types = response;
    });
  }

  loadType() {
    this.selectedType.emit(this.chosen);
  }

  loadSearch(){
    this.searchedTerm.emit(this.searchTerm.value);
  }

}


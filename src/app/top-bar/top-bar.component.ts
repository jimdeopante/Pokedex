import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NameService } from '../name.service';


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
  constructor(private typeservice: NameService) { }

  // ngOnInit() {
  //   this.typeservice.setUrl(this.typesUrl);
  //   this.typeservice.getTypeResults().subscribe(response => {
  //     this.types = response;
  //   });
  // }

  loadType() {
    this.selectedType.emit(this.chosen);
  }

  loadSearch(){
    this.searchedTerm.emit(this.searchTerm.value);
  }

}


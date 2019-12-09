import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  typeLink: string;
  searchName: string;

  selectedType(typeSelected: any) {
    this.typeLink = typeSelected;
  }

  searchedName(searchValue: any) {
    this.searchName = searchValue;
  }
}

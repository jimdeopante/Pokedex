import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { PokemonAPI } from './pokemons';
import { Observable } from 'rxjs';




@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NameService {
Pokemons = [];
apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=807';
// Id = '';

constructor(private http: HttpClient) { }

getPokemon(): Observable<PokemonAPI[]> {
   return this.http.get<PokemonAPI[]>(this.apiURL);
}

getNext(next: string) {
  this.apiURL = next;
}

getPrev(prev: string) {
  this.apiURL = prev;
}

getDetails(details: string) {
  this.apiURL = details;
}
// getPic(pic: string) {
//   this.apiURL = pic;
// }

// getId(id: string) {
//   this.Id = id;
// }

}

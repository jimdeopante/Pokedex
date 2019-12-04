import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Pokemons } from './pokemons';
import { Observable } from 'rxjs';




@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NameService {
Pokemons = [];
apiURL = 'https://pokeapi.co/api/v2/pokemon';


constructor(private http: HttpClient) { }

getPokemon(): Observable<Pokemons[]> {
   return this.http.get<Pokemons[]>(this.apiURL);
}

getNext(next: string) {
  this.apiURL = next;
}

getPrev(prev: string) {
  this.apiURL = prev;
}

}

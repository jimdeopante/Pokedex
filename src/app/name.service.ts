import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { PokemonAPI } from './models/pokemons';
import { PokemonDetails } from './models/pokemondetails';
import { Observable } from 'rxjs';




@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NameService {
Pokemons = [];
results = [];
apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=807';
// Id = '';
pokemonURL ='https://pokeapi.co/api/v2/pokemon/';

constructor(private http: HttpClient) { }

getPokemon(): Observable<PokemonAPI[]> {
   return this.http.get<PokemonAPI[]>(this.apiURL);
}

getDetails(): Observable<PokemonDetails[]> {
  return this.http.get<PokemonDetails[]>(this.pokemonURL);
}

getNext(next: string) {
  this.apiURL = next;
}

getPrev(prev: string) {
  this.apiURL = prev;
}



getPokemonUrl(pokemonnum: string) {
  this.pokemonURL + pokemonnum + '/';
}
// getPic(pic: string) {
//   this.apiURL = pic;
// }

// getId(id: string) {
//   this.Id = id;
// }

}

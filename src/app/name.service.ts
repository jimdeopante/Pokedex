import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PokemonAPI } from './models/pokemonapi';
import { PokemonDetails } from './models/pokemondetails';
import { PokemonTypes } from './models/pokemontypes';
import { Observable } from 'rxjs';




@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NameService {
// @Input() pokemonnumber 
Pokemons = [];
results = [];
// apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=807';
apiURL='';
// Id = '';
pokemonURL ='https://pokeapi.co/api/v2/pokemon/';
url:string;

constructor(private http: HttpClient) { }

setUrl(url: string) {
  this.apiURL = url;
}


getPokemon(): Observable<PokemonAPI[]> {
   return this.http.get<PokemonAPI[]>(this.apiURL);
}

getDetails(url: string): Observable<PokemonDetails[]> {
  return this.http.get<PokemonDetails[]>(url);
}

getTypeResults(): Observable<PokemonTypes[]> {
  return this.http.get<PokemonTypes[]>(this.url);
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

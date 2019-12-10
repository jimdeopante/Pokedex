import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PokemonAPI } from './models/pokemonapi';
import { PokemonDetails } from './models/pokemondetails';
import { PokemonTypes } from './models/pokemontypes';
import { Observable } from 'rxjs';




@Injectable(
)

export class APIService {
pokemonURL ='https://pokeapi.co/api/v2/pokemon/';
url:string;

constructor(private http: HttpClient) { }

setUrl(url: string) {
  this.url = url;
}

getPokemon(url: string): Observable<PokemonAPI[]> {
   return this.http.get<PokemonAPI[]>(url);
}

getDetails(url: string): Observable<PokemonDetails[]> {
  return this.http.get<PokemonDetails[]>(url);
}

getPokemonTypes(url: string): Observable<PokemonTypes[]> {
  return this.http.get<PokemonTypes[]>(url);
}

}

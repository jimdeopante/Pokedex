import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemons } from './pokemons';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class NameService {
Pokemons = [];
apiURL = 'https://pokeapi.co/api/v2/';

constructor(private http: HttpClient) { }
getPokemon(): Observable<Pokemons[]> {
  return this.http.get<Pokemons[]>(this.apiURL);
}
}

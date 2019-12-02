import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NameService {

apiURL = 'https://pokeapi.co/api/v2/';

constructor(private http: HttpClient) { }

}

import { Pipe, PipeTransform } from '@angular/core';
import { PokemonTypes } from '../models/pokemontypes';

@Pipe({
  name: 'filterwithtype'
})
export class FilterWithTypePipe implements PipeTransform {

  transform(items: PokemonTypes['pokemon'], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.pokemon.name.toLowerCase().includes(searchText);
    });
  }
}
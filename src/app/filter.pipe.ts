import { Pipe, PipeTransform } from '@angular/core';
import { PokemonAPI } from './models/pokemonapi';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: PokemonAPI['results'], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( item => {
  return item.name.toLowerCase().includes(searchText);
});
   }
}
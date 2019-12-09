export interface PokemonTypes {
    name: string;
    pokemon: Pokemon[];
  }
  
  export interface Pokemon {
    pokemon: PokemonDetail;
    slot: number;
  }
  
  export interface PokemonDetail {
    name: string;
    url: string;
  }
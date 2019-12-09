export interface PokemonDetails {
    abilities: string;

    weight: number;

    height: number;

    types: Types[];

    name: string;

}

export interface Type {
	name: string;
	url: string;
}

export interface Types {
	slot: number;
	type: Type;
}
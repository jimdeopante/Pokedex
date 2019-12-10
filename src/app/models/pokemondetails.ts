export interface PokemonDetails {

    weight: number;

    height: number;

    types: Types[];

    name: string;

    id: number;

}

export interface Type {
	name: string;
	url: string;
}

export interface Types {
	slot: number;
	type: Type;
}
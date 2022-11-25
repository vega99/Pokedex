export const URL = "https://pokeapi.co/api/v2/pokemon";

const getRandomPokemon = async (number: number): Promise<Pokemon> => {
    try {
        const response = await fetch(`${URL}/${number}`);
        const resJson = await response.json();
        return resJson as Pokemon;
    } catch (error) {
        throw new Error("Algo Salio mal al buscar el pokemon");
    }
};

export interface Pokemon {
    abilities: [
        {
            ability: {
                name: string;
                url: string;
            };
            isHidden: boolean;
            slot: number;
        }
    ];
    base_experience: number;
    forms: [
        {
            name: string;
            url: string;
        }
    ];
    game_indices: [
        {
            game_index: number;
            version: {
                name: string;
                url: string;
            };
        }
    ];
    height: number;
    held_items: [
        {
            item: {
                name: string;
                url: string;
            };
            version_details: [
                {
                    rarity: number;
                    version: {
                        name: string;
                        url: string;
                    };
                }
            ];
        }
    ];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [
        {
            move: {
                name: string;
                url: string;
            };
            version_group_details: [
                {
                    level_learned_at: number;
                    move_learn_method: {
                        name: string;
                        url: string;
                    };
                    version_group: {
                        name: string;
                        url: string;
                    };
                }
            ];
        }
    ];
    name: string;
    order: number;
    past_types: [];
    species: {
        name: string;
        url: string;
    };
    stats: [
        {
            base_stat: number;
            effort: number;
            stat: {
                name: string;
                url: string;
            };
        }
    ];
    types: [
        {
            slot: number;
            type: {
                name: string;
                url: string;
            };
        }
    ];
    weight: number;
    sprites: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
        other: {
            dream_world: {
                front_default: string;
                front_female: null;
            };
            home: {
                front_default: string;
                front_female: null;
                front_shiny: string;
                front_shiny_female: null;
            };
            "official-artwork": {
                front_default: string;
            };
        };
        versions: {
            "generation-i": {
                "red-blue": {
                    back_default: string;
                    back_gray: string;
                    back_transparent: string;
                    front_default: string;
                    front_gray: string;
                    front_transparent: string;
                };
                yellow: {
                    back_default: string;
                    back_gray: string;
                    back_transparent: string;
                    front_default: string;
                    front_gray: string;
                    front_transparent: string;
                };
            };
            "generation-ii": {
                crystal: {
                    back_default: string;
                    back_shiny: string;
                    back_shiny_transparent: string;
                    back_transparent: string;
                    front_default: string;
                    front_shiny: string;
                    front_shiny_transparent: string;
                    front_transparent: string;
                };
                gold: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                    front_transparent: string
                };
                silver: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                    front_transparent: string;
                };
            };
            "generation-iii": {
                emerald: {
                    front_default: string;
                    front_shiny: string;
                };
                "firered-leafgreen": {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
                "ruby-sapphire": {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
            };
            "generation-iv": {
                "diamond-pearl": {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
                "heartgold-soulsilver": {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
                platinum: {
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
            };
            "generation-v": {
                "black-white": {
                    animated: {
                        back_default: string;
                        back_female: string;
                        back_shiny: string;
                        back_shiny_female: string;
                        front_default: string;
                        front_female: string;
                        front_shiny: string;
                        front_shiny_female: string;
                    };
                    back_default: string;
                    back_female: string;
                    back_shiny: string;
                    back_shiny_female: string;
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
            };
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
                "x-y": {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
            };
            "generation-vii": {
                icons: {
                    front_default: string;
                    front_female: string;
                };
                "ultra-sun-ultra-moon": {
                    front_default: string;
                    front_female: string;
                    front_shiny: string;
                    front_shiny_female: string;
                };
            };
            "generation-viii": {
                icons: {
                    front_default: string;
                    front_female: string;
                };
            };
        };
    };
}

export default getRandomPokemon;

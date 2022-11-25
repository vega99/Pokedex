import React from "react";
import { Pokemon } from "../utils/getRandomPokemon";


interface Props {
    pokemon: Pokemon;
}

const PokemonData = ({ pokemon }: Props) => {
    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
                <img
                    src={pokemon.sprites.front_default}
                    alt="image pokemon"
                    className="w-full h-auto"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <div>
                    <h4 className="font-semibold text-xl">Tipo</h4>
                    <div className="flex gap-2 mt-2">
                        {pokemon.types.map((type) => (
                            <div
                                key={type.type.url}
                                className="px-3 py-1 odd:bg-indigo-500 even:bg-indigo-400 text-white rounded-md "
                            >
                                {type.type.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-xl">Altura</h4>
                    <p className="text-lg font-medium text-slate-500">
                        {pokemon.height} m
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-xl">Peso</h4>
                    <p className="text-lg font-medium text-slate-500">
                        {pokemon.weight} kg
                    </p>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <div>
                    <h4 className="font-semibold text-xl">Especie</h4>
                    <p className="text-lg font-medium text-slate-500">
                        {pokemon.species.name}
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-xl">Habilidad</h4>
                    <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name}>
                                <p className="text-lg font-medium text-slate-500">
                                    {ability.ability.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonData;

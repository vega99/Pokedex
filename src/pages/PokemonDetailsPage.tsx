import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getRandomPokemon, { Pokemon } from "../utils/getRandomPokemon";

import PokemonData from "../components/PokemonData";
import ChartBar from "../components/Chart";

const PokemonDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon>();

    const { id } = useParams();

    const getPokemon = async (id: string) => {
        try {
            setLoading(true)
            const pkm = await getRandomPokemon(parseInt(id));
            setPokemon(pkm)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!id) return;
        getPokemon(id)
    }, []);

    return (
        <div className="max-w-5xl mx-auto md:p-10 p-3 flex flex-col gap-y-4">
            {error ? (
                <div className="w-full flex justify-center h-screen items-center">
                    <h1 className="text-3xl font-bold">{error}</h1>
                </div>
            ) : loading ? (
                <div className="w-full flex justify-center h-screen items-center">
                    <h1 className="text-3xl font-bold">Cargando</h1>
                </div>
            ) : pokemon ? (
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">{pokemon.name} #{pokemon.id}</h1>
                    <PokemonData pokemon={pokemon} />
                    <ChartBar pokemon={pokemon} />
                </div>
            ) : (
                <div>
                    <h1>Pokemon No encontrado</h1>
                </div>
            )}
        </div>
    );
};

export default PokemonDetailsPage;

import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import getRandomPokemon, { Pokemon } from "../utils/getRandomPokemon";
import { Link } from "react-router-dom";

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 200);
};

const PokedexPage = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getNewPokemon = async (number: number) => {
        try {
            setLoading(true);
            const pokemon = await getRandomPokemon(number);
            setPokemon(pokemon);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNewPokemon(generateRandomNumber());

        const interval = setInterval(() => {
            getNewPokemon(generateRandomNumber());
        }, 30 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-10 flex flex-col items-center gap-y-4">
            <img src={logo} alt="logo" className="w-full max-w-md mx-auto" />
            {pokemon && (
                <div className="shadow-md rounded-md w-full max-w-md mx-auto bg-white">
                    <div className="w-full h-60 bg-slate-200 rounded-md">
                        <img
                            src={pokemon.sprites.front_default}
                            alt="image pokemon"
                            className="w-full h-full object-fill"
                        />
                    </div>
                    <div className="p-5 text-center">
                        <h1 className="text-2xl font-bold mb-3">{pokemon.name}</h1>
                        <Link to={`/details/${pokemon.id}`} className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-700">
                            detalles
                        </Link>
                    </div>
                </div>
            )}
            <button
                onClick={() => getNewPokemon(generateRandomNumber())}
                className="mx-auto px-3 py-1 bg-sky-500 text-white rounded-md hover:bg-sky-700"
            >
                Nuevo Pokemon
            </button>
        </div>
    );
};

export default PokedexPage;

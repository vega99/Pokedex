import React from "react";
import { Routes, Route } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

function App() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-yellow-300 to bg-orange-300">
            <Routes>
                <Route path="/" element={<PokedexPage />} />
                <Route path="/details/:id" element={<PokemonDetailsPage />} />
            </Routes>
        </div>
    );
}

export default App;

import React from "react";
import { Pokemon } from "../utils/getRandomPokemon";
import Chart from "react-apexcharts";

interface Props {
    pokemon: Pokemon;
}

const ChartBar = ({ pokemon }: Props) => {
    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: pokemon.stats.map((s) => s.stat.name),
        },
    };

    const series = [
        {
            name: "series-1",
            data: pokemon.stats.map((da) => da.base_stat),
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-5">Estadísticas</h1>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={400}
                    width={"100%"}
                />
            </div>
        </div>
    );
};

export default ChartBar;

import React from "react";
import LimitSort from "../components/Limit&Sort";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import Pokeman from "../components/Pokemon";
import SearchPokemon from "../components/SearchPokemon";

const Home = () => (
    <div>
        <Navigation />
        <div className="container">
            <SearchPokemon />
            <Pagination />
            <LimitSort />
            <Pokeman />
            <Pagination />
        </div>
    </div>
)

export default Home;

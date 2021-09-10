import React from "react";
import Navigation from "../components/Navigation";
import SearchPokemon from "../components/SearchPokemon";
import LimitSort from "../components/Limit&Sort";
import Pokeman from "../components/Pokemon";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
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
  );
};

export default Home;

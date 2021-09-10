import React from "react";
import { useDispatch } from "react-redux";
import { searchTerm } from "../store/actions/pokemonAction";

const SearchPokemon = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        className="pokemon__input"
        placeholder="Search pokemon..."
        onChange={(event) => dispatch(searchTerm(event.target.value))}
      />
    </div>
  );
};

export default SearchPokemon;

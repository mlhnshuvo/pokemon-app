import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPokemon, sorting } from "../store/actions/pokemonAction";

const LimitSort = () => {
  const pokemon = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();

  return (
    <div className="limitandsort">
      <div className="limitandsort__perpage">
        <label for="perpage" className="limitandsort__perpage">
          Sort by
        </label>
        <select
          name="sort"
          className="limitandsort__select"
          onChange={(e) => dispatch(sorting(e.target.value))}
        >
          <option className="limitandsort__option">Choose an option</option>
          <option value="name" className="limitandsort__option">
            Name
          </option>
          <option value="weight" className="limitandsort__option">
            Weight
          </option>
          <option value="height" className="limitandsort__option">
            Height
          </option>
        </select>
      </div>

      <div className="limitandsort__perpage">
        <label for="perpage" className="limitandsort__perpage">
          Per page
        </label>
        <select
          name="sort"
          className="limitandsort__select"
          onChange={(e) => dispatch(allPokemon(pokemon.offset, e.target.value))}
        >
          <option className="limitandsort__option">select limit</option>
          <option className="limitandsort__option">10</option>
          <option className="limitandsort__option">20</option>
          <option className="limitandsort__option">30</option>
          <option className="limitandsort__option">40</option>
          <option className="limitandsort__option">50</option>
          <option className="limitandsort__option">60</option>
        </select>
      </div>
    </div>
  );
};

export default LimitSort;

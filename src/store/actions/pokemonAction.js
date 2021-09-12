import axios from "axios";
import * as Types from "../constants/types";

export const allPokemon = (offset = 0, limit = 0) => (dispatch) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    axios.get(url)
      .then((allPokemons) => {
        let pokemons = [];
        allPokemons.data.results.forEach((el) => {
          axios.get(el.url)
            .then((eachPokemon) => {
              pokemons.push(eachPokemon.data);
              dispatch({
                type: Types.allPokemon,
                payload: {
                  allPokemons: allPokemons.data,
                  eachPokemon: pokemons,
                  offset,
                  limit,
                },
              });
              dispatch(performSearch());
              dispatch(sorting());
            })
            .catch(() => {
              dispatch({
                type: Types.pokemonError,
                payload: {
                  errors: "Server error occured",
                },
              });
            });
        });
      })
      .catch(() => {
        dispatch({
          type: Types.pokemonError,
          payload: {
            errors: "Server error occured",
          },
        });
      });
  };

export const searchTerm = (value) => (dispatch) => {
  dispatch({
    type: Types.searchTerm,
    payload: {
      value,
    },
  });
  dispatch(performSearch());
};

export const performSearch = () => (dispatch) => {
  dispatch({
    type: Types.performSearch,
  });
};

export const sorting = (value) => (dispatch) => {
  let finalValue = "";
  const getSort = localStorage.getItem("sort");
  if (getSort) {
    finalValue = getSort;
  } else {
    finalValue = value;
  }

  dispatch({
    type: Types.sortPokemon,
    payload: {
      value: finalValue,
    },
  });
  dispatch(performSearch());
};


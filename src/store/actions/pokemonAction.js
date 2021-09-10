import * as Types from "../constants/types";
import Axios from "axios";

export const allPokemon =
  (offset = 0, limit = 0) =>
  (dispatch) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    Axios.get(url)
      .then((allPokemons) => {
        let pokemons = [];
        allPokemons.data.results.forEach((el) => {
          Axios.get(el.url)
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
  dispatch({
    type: Types.sortPokemon,
    payload: {
      value,
    },
  });
  dispatch(performSearch());
};

import * as Types from "../constants/types";

let init = {
  allPokemon: {},
  eachPokemon: [],
  searchTerm: "",
  finalEachPokemon: [],
  errors: "",
  isLoading: true,
  offset: "",
  limit: "",
};

const pokemonReducer = (state = init, action) => {
  switch (action.type) {
    case Types.allPokemon: {
      let eachPokemon = action.payload.eachPokemon;
      let allPokemons = action.payload.allPokemons;
      let offset = action.payload.offset;
      let limit = action.payload.limit;
      return {
        ...state,
        allPokemon: allPokemons,
        eachPokemon: eachPokemon,
        offset,
        limit,
        isLoading: false,
      };
    }
    case Types.pokemonError: {
      let errors = action.payload.errors;
      return {
        ...state,
        errors: errors,
      };
    }
    case Types.searchTerm: {
      return {
        ...state,
        searchTerm: action.payload.value,
      };
    }
    case Types.performSearch: {
      let final = state.eachPokemon.filter((el) =>
        el.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        ...state,
        finalEachPokemon: final,
      };
    }
    case Types.sortPokemon: {
      const states = { ...state };
      if (action.payload.value === "name") {
        states.eachPokemon.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (action.payload.value === "weight") {
        states.eachPokemon.sort(function (a, b) {
          if (a.weight > b.weight) {
            return 1;
          } else if (a.weight < b.weight) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (action.payload.value === "height") {
        states.eachPokemon.sort(function (a, b) {
          if (a.height > b.height) {
            return 1;
          } else if (a.height < b.height) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      return states;
    }
    default:
      return state;
  }
};

export default pokemonReducer;

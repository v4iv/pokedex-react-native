import {
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  SORT_POKEMONS,
} from '../constants/pokedex.constants';

const INITIAL_STATE = {
  pokemonList: [],
  url: 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0',
  error: null,
  loading: false,
};

const pokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POKEDEX_REQUEST:
      return {
        ...state,
        pokemonList: [...state.pokemonList],
        loading: true,
      };
    case FETCH_POKEDEX_SUCCESS:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload.data],
        url: action.payload.url,
        loading: false,
      };
    case FETCH_POKEDEX_ERROR:
      return {
        ...state,
        pokemonList: [...state.pokemonList],
        error: action.payload,
        loading: false,
      };
    case SORT_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
      };
    default:
      return state;
  }
};

export default pokedexReducer;

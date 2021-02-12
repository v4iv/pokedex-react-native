import {combineReducers} from 'redux';
import pokedexReducer from './pokedex.reducer';
import pokemonReducer from './pokemon.reducer';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;

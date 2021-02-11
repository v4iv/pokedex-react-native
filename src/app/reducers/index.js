import {combineReducers} from 'redux';
import pokedexReducer from './pokedex.reducer';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
});

export default rootReducer;

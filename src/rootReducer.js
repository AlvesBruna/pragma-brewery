import { combineReducers } from 'redux';
import { beersReducers } from './Beers';

const rootReducer = combineReducers(beersReducers);

export default rootReducer;

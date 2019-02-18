import { combineReducers } from 'redux';
import { beersReducers } from './beers';

const rootReducer = combineReducers(beersReducers);

export default rootReducer;

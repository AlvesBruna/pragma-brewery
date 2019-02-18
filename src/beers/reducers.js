import { beers } from './beers';
import { createTemperatureReducer } from '../_core/reducers/temperatureReducer';

const beersReducers = {};

beers.map((beer) =>
  Object.assign(beersReducers, {
    [beer.id]: createTemperatureReducer(beer.id, {
      current: beer.temperature.current,
    }),
  }),
);

export { beersReducers };

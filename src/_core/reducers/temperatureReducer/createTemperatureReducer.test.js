import createReducer from './createTemperatureReducer';
import { DECREASE_TEMPERATURE, INCREASE_TEMPERATURE } from '../../actions';

describe('createTemperatureReducer', () => {
  const actionPrefix = 'beerStyle';
  const initialState = { current: -5, max: -5, min: -6 };
  const reducer = createReducer(actionPrefix);

  it('should return initial state.', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should return decreased temperature', () => {
    expect(
      reducer(initialState, { type: `${actionPrefix}${DECREASE_TEMPERATURE}` }),
    ).toEqual({ ...initialState, current: -6 });
  });

  it('should return increased temperature', () => {
    expect(
      reducer(initialState, { type: `${actionPrefix}${INCREASE_TEMPERATURE}` }),
    ).toEqual({ ...initialState, current: -4 });
  });
});

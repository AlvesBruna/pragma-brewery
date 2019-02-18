import {
  createIncreaseTemperatureAction,
  createDecreaseTemperatureAction,
} from './createTemperatureActions';

describe('createTeperatureAction', () => {
  const prefix = 'beerStyle';

  it('should create action DECREASE_TEMPERATURE', () => {
    const expectedAction = { type: `${prefix}_DECREASE_TEMPERATURE` };

    expect(createDecreaseTemperatureAction(prefix)).toEqual(expectedAction);
  });

  it('should create action INCREASE_TEMPERATURE', () => {
    const expectedAction = { type: `${prefix}_INCREASE_TEMPERATURE` };

    expect(createIncreaseTemperatureAction(prefix)).toEqual(expectedAction);
  });
});

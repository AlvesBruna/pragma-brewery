import {
  DECREASE_TEMPERATURE,
  INCREASE_TEMPERATURE,
} from './temperatureActionTypes';

export function createIncreaseTemperatureAction(actionPrefix) {
  return {
    type: `${actionPrefix}${INCREASE_TEMPERATURE}`,
  };
}

export function createDecreaseTemperatureAction(actionPrefix) {
  return {
    type: `${actionPrefix}${DECREASE_TEMPERATURE}`,
  };
}

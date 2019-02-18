import {
  createIncreaseTemperatureAction,
  createDecreaseTemperatureAction,
} from '../_core/actions/';

export function increaseTemperature(prefix) {
  return createIncreaseTemperatureAction(prefix);
}
export function decreaseTemperature(prefix) {
  return createDecreaseTemperatureAction(prefix);
}

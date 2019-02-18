import { INCREASE_TEMPERATURE, DECREASE_TEMPERATURE } from '../../actions';

export default function temperatureReducer(actionPrefix, initialState) {
  return (state = initialState, { type }) => {
    switch (type) {
      case `${actionPrefix}${DECREASE_TEMPERATURE}`:
        return {
          ...state,
          current: state.current - 1,
        };
      case `${actionPrefix}${INCREASE_TEMPERATURE}`:
        return {
          ...state,
          current: state.current + 1,
        };

      default:
        return state;
    }
  };
}

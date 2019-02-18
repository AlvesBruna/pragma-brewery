import React from 'react';
import PropTypes from 'prop-types';
import { Thermostat } from '../Thermostat';
import './BeerContainer.scss';

const BeerContainer = ({
  beer,
  temperature,
  increaseTemperature,
  decreaseTemperature,
}) => {
  const { style } = beer;
  return (
    <div className="container">
      <h5>{style}</h5>
      <Thermostat
        beer={beer}
        temperature={temperature}
        increaseTemperature={increaseTemperature}
        decreaseTemperature={decreaseTemperature}
      />
    </div>
  );
};

BeerContainer.propTypes = {
  beer: PropTypes.shape({
    style: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
      current: PropTypes.number,
    }),
    id: PropTypes.string,
  }),
  temperature: PropTypes.number,
  increaseTemperature: PropTypes.func,
  decreaseTemperature: PropTypes.func,
};

export default BeerContainer;

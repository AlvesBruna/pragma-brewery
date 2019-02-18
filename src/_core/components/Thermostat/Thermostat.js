import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './Thermostat.scss';

const Thermostat = ({
  temperature,
  beer,
  increaseTemperature,
  decreaseTemperature,
}) => {
  return (
    <Row className="thermostat">
      <Col className="p-0" xl="6" sm="12">
        <div className="display">{temperature}°C</div>
      </Col>
      <Col className="actions" xl="6" sm="12">
        <Button id="increase-btn" onClick={() => increaseTemperature(beer.id)}>
          +
        </Button>
        <Button id="decrease-btn" onClick={() => decreaseTemperature(beer.id)}>
          -
        </Button>
      </Col>
    </Row>
  );
};
Thermostat.propTypes = {
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
export default Thermostat;

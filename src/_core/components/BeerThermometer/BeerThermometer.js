import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { AlertPopover } from '../AlertPopover';
import './BeerThermometer.scss';

class BeerThermometer extends Component {
  render() {
    const { beer, temperature } = this.props;
    const isInRange =
      temperature <= beer.temperature.max &&
      temperature >= beer.temperature.min;

    return (
      <Fragment>
        <Card
          id={beer.id}
          className={classnames('thermometer-card', ' mt-3', {
            'out-range': !isInRange,
          })}
        >
          <CardBody className="p-2">
            <CardTitle>
              <p id="title">{beer.style}</p>
            </CardTitle>
            <CardText>
              <span className="mr-1" id="max">
                max: {beer.temperature.max}°C
              </span>
              <span id="min">min: {beer.temperature.min}°C</span>
            </CardText>
          </CardBody>
        </Card>
        <AlertPopover
          beerStyle={beer.style}
          popoverOpen={!isInRange}
          target={beer.id}
        />
      </Fragment>
    );
  }
}
BeerThermometer.propTypes = {
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
};
export default BeerThermometer;

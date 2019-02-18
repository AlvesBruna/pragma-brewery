import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { beers, decreaseTemperature, increaseTemperature } from '../beers';
import { BeerContainer, BeerThermometer } from '../_core/components';
import './TruckPage.scss';

class TruckPage extends Component {
  renderContainers = () => {
    const { state, increaseTemperature, decreaseTemperature } = this.props;
    return beers.map((beer, i) => (
      <Col sm="4" className="p-0" key={i}>
        <BeerContainer
          beer={beer}
          temperature={state[beer.id].current}
          increaseTemperature={increaseTemperature}
          decreaseTemperature={decreaseTemperature}
        />
      </Col>
    ));
  };

  renderThermometers = () => {
    const { state } = this.props;
    return beers.map((beer, i) => (
      <BeerThermometer
        key={i}
        beer={beer}
        temperature={state[beer.id].current}
      />
    ));
  };

  render() {
    return (
      <Container className="truck" fluid={true}>
        <Row className="h-100">
          <Col sm="6" className="d-flex align-items-center pr-0">
            <div className="semi-trailer">{this.renderContainers()}</div>
          </Col>
          <Col sm="6" className="pl-0">
            <div className="tractor-unit d-none d-lg-block" />
            {this.renderThermometers()}
          </Col>
        </Row>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return { state: state };
}

const mapDispatchToProps = {
  decreaseTemperature,
  increaseTemperature,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TruckPage);

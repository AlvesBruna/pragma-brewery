import React from 'react';
import { shallow } from 'enzyme';
import BeerContainer from './BeerContainer';

describe('BeerContainer', () => {
  const props = {
    beer: {
      style: 'Indan Pale Ale',
      temperature: { max: -4, min: -6, current: -5 },
      id: 'pilsner',
    },
    temperature: -5,
    increaseTemperature: jest.fn(),
    decreaseTemperature: jest.fn(),
  };

  it('should render', () => {
    const wrapper = shallow(<BeerContainer {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the correct props', () => {
    const wrapper = shallow(<BeerContainer {...props} />);
    const title = wrapper.find('h5').text();
    const thermostatProps = wrapper.find('Thermostat').props();

    expect(title).toBe('Indan Pale Ale');
    expect(thermostatProps.beer).toBe(props.beer);
    expect(thermostatProps.temperature).toBe(props.temperature);
    expect(thermostatProps.increaseTemperature).toBe(props.increaseTemperature);
    expect(thermostatProps.decreaseTemperature).toBe(props.decreaseTemperature);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Thermostat from './Thermostat';

describe('Thermostat', () => {
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
    const wrapper = shallow(<Thermostat {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the correct temperature', () => {
    const wrapper = shallow(<Thermostat {...props} />);
    const displayTemperature = wrapper.find('.display').text();

    expect(displayTemperature).toEqual(`${props.temperature}°C`);
  });

  it('should invoke increaseTemperature function', () => {
    const increaseTemperatureFn = jest.fn();
    const wrapper = shallow(
      <Thermostat {...props} increaseTemperature={increaseTemperatureFn} />,
    );
    wrapper.find('#increase-btn').simulate('click');

    expect(increaseTemperatureFn).toHaveBeenCalled();
  });

  it('should invoke decreaseTemperature function', () => {
    const decreaseTemperatureFn = jest.fn();
    const wrapper = shallow(
      <Thermostat {...props} decreaseTemperature={decreaseTemperatureFn} />,
    );
    wrapper.find('#decrease-btn').simulate('click');

    expect(decreaseTemperatureFn).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import BeerThermometer from './BeerThermometer';

describe('BeerThermometer', () => {
  const props = {
    beer: {
      style: 'Indan Pale Ale',
      temperature: { max: -4, min: -6, current: -5 },
      id: 'pilsner',
    },
    temperature: -5,
  };

  it('should render', () => {
    const wrapper = shallow(<BeerThermometer {...props} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the correct props', () => {
    const wrapper = shallow(<BeerThermometer {...props} />);
    const card = wrapper.find('.thermometer-card').props();
    const cardTitle = wrapper.find('#title').text();
    const cardTextmax = wrapper.find('#max').text();
    const cardTextmin = wrapper.find('#min').text();
    const alertPopoverProps = wrapper.find('AlertPopover').props();

    expect(card.id).toBe(props.beer.id);
    expect(cardTitle).toBe(props.beer.style);
    expect(cardTextmax).toBe(`max: ${props.beer.temperature.max}°C`);
    expect(cardTextmin).toBe(`min: ${props.beer.temperature.min}°C`);
    expect(alertPopoverProps.beerStyle).toBe(props.beer.style);
    expect(alertPopoverProps.target).toBe(props.beer.id);
    expect(alertPopoverProps.popoverOpen).toBeFalsy();
  });

  it('should open alert popover when beer temperature is out of range', () => {
    const componentProps = { ...props, temperature: -3 };
    const wrapper = shallow(<BeerThermometer {...componentProps} />);
    const alertPopoverProps = wrapper.find('AlertPopover').props();

    expect(alertPopoverProps.popoverOpen).toBeTruthy();
  });
});

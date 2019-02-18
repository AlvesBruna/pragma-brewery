import React from 'react';
import { shallow } from 'enzyme';
import AlertPopover from './AlertPopover';

describe('AlertPopover', () => {
  const props = { beerStyle: 'IPA', popoverOpen: false, target: 'ipa' };

  it('should render', () => {
    const wrapper = shallow(<AlertPopover {...props} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.alert-popover').props().isOpen).toBeFalsy();
  });

  it('should render the correct props', () => {
    const wrapper = shallow(<AlertPopover {...props} />);
    const popoverText = wrapper.find('p').text();
    const popoverTarget = wrapper.find('.alert-popover').props().target;

    expect(popoverText).toBe("IPA's container temperature is out of range");
    expect(popoverTarget).toBe(props.target);
  });

  it('popover should be open', () => {
    const componentProps = { ...props, popoverOpen: true };
    const wrapper = shallow(<AlertPopover {...componentProps} />);

    expect(wrapper.find('.alert-popover').props().isOpen).toBeTruthy();
  });
});

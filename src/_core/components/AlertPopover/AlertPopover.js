import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'reactstrap';
import './AlertPopover.scss';

class AlertPopover extends React.Component {
  render() {
    const { beerStyle, popoverOpen, target } = this.props;
    return (
      <Popover
        className="alert-popover p-2"
        placement="left"
        isOpen={popoverOpen}
        target={target}
      >
        <p>{beerStyle}'s container temperature is out of range</p>
      </Popover>
    );
  }
}

AlertPopover.propTypes = {
  beerStyle: PropTypes.string,
  popoverOpen: PropTypes.bool,
  target: PropTypes.string,
};

export default AlertPopover;

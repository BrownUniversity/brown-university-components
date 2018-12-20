import PropTypes from 'prop-types';
import { Component } from 'react';

class VisibilityToggle extends Component {
  state = {
    isOpen: false
  };

  toggleIsOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { children, ...restProps } = this.props;

    return children({
      ...restProps,
      ...this.state,
      toggleIsOpen: this.toggleIsOpen
    });
  }
}

VisibilityToggle.propTypes = {
  children: PropTypes.func.isRequired
};

export default VisibilityToggle;

import PropTypes from 'prop-types';
import { Component } from 'react';

class VisibilityToggle extends Component {
  state = {
    isOpen: false
  };

  toggleIsOpen = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
  };

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

import PropTypes from "prop-types";
import { Component } from "react";

class VisibilityToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleIsOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const { children, ...restProps } = this.props;

    return children({
      ...restProps,
      ...this.state,
      toggleIsOpen: this.toggleIsOpen,
    });
  }
}

VisibilityToggle.propTypes = {
  children: PropTypes.func.isRequired,
};

export default VisibilityToggle;

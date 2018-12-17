import PropTypes from 'prop-types';
import { Component } from 'react';

class NavToggle extends Component {
  state = {
    navIsOpen: false,
    navCollapseDisplay: 'none'
  };

  toggleNav = () => {
    if (this.state.navIsOpen) {
      this.setState(
        {
          navIsOpen: false
        },
        () => {
          setTimeout(
            () =>
              this.setState({
                navCollapseDisplay: 'none'
              }),
            this.props.navCollapseDisplayNoneTimeout
          );
        }
      );
    } else {
      this.setState({
        navIsOpen: true,
        navCollapseDisplay: 'block'
      });
    }
  };

  render() {
    const { children, ...restProps } = this.props;

    return children({
      ...restProps,
      ...this.state,
      toggleNav: this.toggleNav
    });
  }
}

NavToggle.propTypes = {
  navCollapseDisplayNoneTimeout: PropTypes.number,
  children: PropTypes.func.isRequired
};

NavToggle.defaultProps = {
  navCollapseDisplayNoneTimeout: 250
};

export default NavToggle;

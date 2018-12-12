import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowSize } from 'react-fns';
import { Collapse } from 'react-collapse';

import NavbarContext from './NavbarContext';
import Hamburger from '../Hamburger';
import Nav from '../Nav';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import media from '../../constants/media';

/*
  inner components
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
const MobileCollapseWrapper = styled(({ color, ...restProps }) => (
  <div {...restProps} />
))`
  box-shadow: 0 5px 10px 0 #00000026;
  left: 0;
  position: absolute;
  top: 75px;
  width: 100%;
  background-color: ${({ color }) => colors[color]};
`;

const MobileNavWrapper = styled.div`
  padding: 0 7vw 1rem;

  ${media.md`
    padding: 0 33px;
  `};
`;

/*
  outer NavbarNav component
*/
const getChildColor = color => {
  switch (color) {
    case 'white':
      return 'red';

    // brown
    default:
      return 'white';
  }
};

class NavbarNav extends Component {
  state = {
    mobileNavIsOpen: false
  };

  handleMobileNavToggle = () =>
    this.setState(({ mobileNavIsOpen }) => ({
      mobileNavIsOpen: !mobileNavIsOpen
    }));

  render() {
    const { mobileBreakpoint, ...restProps } = this.props;
    const { mobileNavIsOpen } = this.state;

    return (
      <WindowSize
        render={({ width }) => {
          // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
          const currentWidth = width === 0 ? window.innerWidth : width;
          const renderMobile = currentWidth < mobileBreakpoint;

          return (
            <NavbarContext.Consumer>
              {({ color }) => {
                const childColor = getChildColor(color);

                if (renderMobile) {
                  return (
                    <div {...restProps}>
                      <Hamburger
                        aria-controls="navbar-nav-mobile-collapse"
                        color={childColor}
                        isOpen={mobileNavIsOpen}
                        onOpen={this.handleMobileNavToggle}
                        onClose={this.handleMobileNavToggle}
                      />
                      <MobileCollapseWrapper color={color}>
                        <Collapse
                          id="navbar-nav-mobile-collapse"
                          isOpened={mobileNavIsOpen}
                        >
                          <MobileNavWrapper>
                            <Nav mobile color={childColor}>
                              {this.props.children}
                            </Nav>
                          </MobileNavWrapper>
                        </Collapse>
                      </MobileCollapseWrapper>
                    </div>
                  );
                }

                return (
                  <Nav {...restProps} navbar color={childColor}>
                    {this.props.children}
                  </Nav>
                );
              }}
            </NavbarContext.Consumer>
          );
        }}
      />
    );
  }
}

NavbarNav.propTypes = {
  mobileBreakpoint: PropTypes.number,
  children: PropTypes.node.isRequired
};

NavbarNav.defaultProps = {
  mobileBreakpoint: breakpoints.md
};

NavbarNav.Item = Nav.Item;
NavbarNav.Link = Nav.Link;

export default NavbarNav;

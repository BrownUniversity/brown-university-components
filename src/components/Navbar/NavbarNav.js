import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowSize } from 'react-fns';
import { Collapse } from 'react-collapse';

import Hamburger from '../Hamburger';
import Nav from '../Nav';
import breakpoints from '../../constants/breakpoints';
import colors from '../../constants/colors';
import media from '../../constants/media';

/*
  inner components
*/
const MobileCollapseWrapper = styled.div`
  box-shadow: 0 5px 10px 0 #00000026;
  left: 0;
  position: absolute;
  top: 75px;
  width: 100%;
`;

const MobileNavWrapper = styled.div`
  background-color: ${colors.white};
  padding: 0 7vw 1rem;

  ${media.md`
    padding: 0 33px;
  `};
`;

/*
  outer NavbarNav component
*/
class NavbarNav extends Component {
  state = {
    mobileNavIsOpen: false
  };

  handleMobileNavToggle = () =>
    this.setState(({ mobileNavIsOpen }) => ({
      mobileNavIsOpen: !mobileNavIsOpen
    }));

  render() {
    const { mobileNavBreakpoint, ...restProps } = this.props;
    const { mobileNavIsOpen } = this.state;

    return (
      <WindowSize
        render={({ width }) => {
          // TODO: update when width doesn't return 0 on initial render
          // https://github.com/jaredpalmer/react-fns/issues/84
          const currentWidth = width === 0 ? window.innerWidth : width;
          const renderMobile = currentWidth < mobileNavBreakpoint;

          if (renderMobile) {
            return (
              <div {...restProps}>
                <Hamburger
                  aria-controls="navbar-nav-mobile-collapse"
                  isOpen={mobileNavIsOpen}
                  onOpen={this.handleMobileNavToggle}
                  onClose={this.handleMobileNavToggle}
                />
                <MobileCollapseWrapper>
                  <Collapse
                    isOpened={mobileNavIsOpen}
                    id="navbar-nav-mobile-collapse"
                  >
                    <MobileNavWrapper>
                      <Nav mobile>{this.props.children}</Nav>
                    </MobileNavWrapper>
                  </Collapse>
                </MobileCollapseWrapper>
              </div>
            );
          }

          return (
            <Nav {...restProps} navbar>
              {this.props.children}
            </Nav>
          );
        }}
      />
    );
  }
}

NavbarNav.propTypes = {
  mobileNavBreakpoint: PropTypes.number,

  children: PropTypes.node.isRequired
};

NavbarNav.defaultProps = {
  mobileNavBreakpoint: breakpoints.md
};

NavbarNav.Item = Nav.Item;
NavbarNav.Link = Nav.Link;

export default NavbarNav;

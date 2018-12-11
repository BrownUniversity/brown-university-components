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
import { sansBold } from '../../constants/typography';

/*
  inner components
*/
const MenuToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
`;

const MenuTitle = styled.span`
  color: ${({ color }) => colors[color]};
  font-family: ${sansBold};
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-left: 10px;
  text-transform: uppercase;
`;

const CollapseWrapper = styled.div`
  box-shadow: 0 5px 10px 0 #00000026;
  left: 0;
  position: absolute;
  top: 75px;
  width: 100%;
  background-color: ${({ color }) => colors[color]};
`;

const NavWrapper = styled.div`
  padding: 0 7vw 1rem;

  ${media.md`
    padding: 0 33px 1rem 33px;
  `};
`;

/*
  outer NavbarGlobalNav component
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

class NavbarGlobalNav extends Component {
  state = {
    navIsOpen: false
  };

  handleNavToggle = () =>
    this.setState(({ navIsOpen }) => ({
      navIsOpen: !navIsOpen
    }));

  render() {
    const { mobileNavBreakpoint, ...restProps } = this.props;
    const { navIsOpen } = this.state;

    return (
      <WindowSize
        render={({ width }) => {
          // TODO: update when width doesn't return 0 on initial render
          // https://github.com/jaredpalmer/react-fns/issues/84
          const currentWidth = width === 0 ? window.innerWidth : width;
          const renderMobile = currentWidth < mobileNavBreakpoint;

          return (
            <NavbarContext.Consumer>
              {({ color }) => {
                const childColor = getChildColor(color);

                return (
                  <div {...restProps}>
                    <MenuToggleButton
                      type="button"
                      aria-controls="navbar-global-nav-collapse"
                      aria-expanded={navIsOpen}
                      aria-label="Toggle navigation"
                      onClick={this.handleNavToggle}
                    >
                      <Hamburger
                        tag="div"
                        color={childColor}
                        isOpen={navIsOpen}
                      />
                      {!renderMobile && (
                        <MenuTitle color={childColor}>
                          Global Navigation
                        </MenuTitle>
                      )}
                    </MenuToggleButton>
                    <CollapseWrapper color={color}>
                      <Collapse
                        isOpened={navIsOpen}
                        id="navbar-global-nav-collapse"
                      >
                        <NavWrapper>
                          <Nav mobile color={childColor}>
                            {this.props.children}
                          </Nav>
                        </NavWrapper>
                      </Collapse>
                    </CollapseWrapper>
                  </div>
                );
              }}
            </NavbarContext.Consumer>
          );
        }}
      />
    );
  }
}

NavbarGlobalNav.propTypes = {
  mobileNavBreakpoint: PropTypes.number,
  children: PropTypes.node.isRequired
};

NavbarGlobalNav.defaultProps = {
  mobileNavBreakpoint: breakpoints.md
};

NavbarGlobalNav.Item = Nav.Item;
NavbarGlobalNav.Link = Nav.Link;

export default NavbarGlobalNav;

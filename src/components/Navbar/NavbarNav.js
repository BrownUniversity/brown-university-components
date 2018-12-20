import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { WindowSize } from 'react-fns';

import NavbarContext from './NavbarContext';
import Hamburger from '../Hamburger';
import Nav from '../Nav';
import Collapse from '../utils/Collapse';
import VisibilityToggle from '../utils/VisibilityToggle';
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

const NavbarNav = ({ children, ...restProps }) => (
  <WindowSize
    render={({ width }) => {
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      const currentWidth = width === 0 ? window.innerWidth : width;

      return (
        <NavbarContext.Consumer>
          {({ color, mobileBreakpoint }) => {
            const childColor = getChildColor(color);
            const renderMobile = currentWidth < mobileBreakpoint;

            if (renderMobile) {
              return (
                <div {...restProps}>
                  <VisibilityToggle>
                    {({
                      isOpen: mobileNavIsOpen,
                      toggleIsOpen: toggleMobileNav
                    }) => (
                      <React.Fragment>
                        <Hamburger
                          aria-controls="navbar-nav-mobile-collapse"
                          color={childColor}
                          isOpen={mobileNavIsOpen}
                          onOpen={toggleMobileNav}
                          onClose={toggleMobileNav}
                        />
                        <MobileCollapseWrapper color={color}>
                          <Collapse
                            id="navbar-nav-mobile-collapse"
                            isOpen={mobileNavIsOpen}
                          >
                            <MobileNavWrapper>
                              <Nav mobile color={childColor}>
                                {children}
                              </Nav>
                            </MobileNavWrapper>
                          </Collapse>
                        </MobileCollapseWrapper>
                      </React.Fragment>
                    )}
                  </VisibilityToggle>
                </div>
              );
            }

            return (
              <Nav {...restProps} navbar color={childColor}>
                {children}
              </Nav>
            );
          }}
        </NavbarContext.Consumer>
      );
    }}
  />
);

NavbarNav.propTypes = {
  children: PropTypes.node.isRequired
};

NavbarNav.Item = Nav.Item;
NavbarNav.Link = Nav.Link;

export default NavbarNav;

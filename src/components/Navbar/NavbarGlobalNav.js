import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { WindowSize } from "react-fns";

import NavbarContext from "./NavbarContext";
import Hamburger from "../Hamburger";
import Nav from "../Nav";
import Collapse from "../utils/Collapse";
import VisibilityToggle from "../utils/VisibilityToggle";
import colors from "../../constants/colors";
import media from "../../constants/media";
import { sansBold } from "../../constants/typography";

/*
  inner components
*/
const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
`;

// filter props so they don't become dom attributes (see `styled-components` issue 439)
const ToggleTitle = styled(({ color, ...restProps }) => (
  <span {...restProps} />
))`
  color: ${({ color }) => colors[color]};
  font-family: ${sansBold};
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-left: 10px;
  text-transform: uppercase;
`;

// filter props so they don't become dom attributes (see `styled-components` issue 439)
const CollapseWrapper = styled(({ color, ...restProps }) => (
  <div {...restProps} />
))`
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
    case "white":
      return "red";

    // brown
    default:
      return "white";
  }
};

const NavbarGlobalNav = ({ children, ...restProps }) => (
  <WindowSize
    render={({ width }) => {
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      const currentWidth = width === 0 ? window.innerWidth : width;

      return (
        <NavbarContext.Consumer>
          {({ color, mobileBreakpoint, toggleTitle }) => {
            const childColor = getChildColor(color);
            const renderMobile = currentWidth < mobileBreakpoint;

            return (
              <div {...restProps}>
                <VisibilityToggle>
                  {({ isOpen: navIsOpen, toggleIsOpen: toggleNav }) => (
                    <React.Fragment>
                      <ToggleButton
                        type="button"
                        aria-controls="navbar-global-nav-collapse"
                        aria-expanded={navIsOpen}
                        aria-label="Toggle global navigation"
                        onClick={toggleNav}
                      >
                        <Hamburger
                          tag="div"
                          color={childColor}
                          isOpen={navIsOpen}
                        />
                        {!renderMobile && (
                          <ToggleTitle color={childColor}>
                            {toggleTitle}
                          </ToggleTitle>
                        )}
                      </ToggleButton>
                      <CollapseWrapper color={color}>
                        <Collapse
                          id="navbar-global-nav-collapse"
                          isOpen={navIsOpen}
                        >
                          <NavWrapper>
                            <Nav mobile color={childColor}>
                              {children}
                            </Nav>
                          </NavWrapper>
                        </Collapse>
                      </CollapseWrapper>
                    </React.Fragment>
                  )}
                </VisibilityToggle>
              </div>
            );
          }}
        </NavbarContext.Consumer>
      );
    }}
  />
);

NavbarGlobalNav.propTypes = {
  children: PropTypes.node.isRequired
};

NavbarGlobalNav.Item = Nav.Item;
NavbarGlobalNav.Link = Nav.Link;

export default NavbarGlobalNav;

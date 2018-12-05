import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowSize } from 'react-fns';

// TODO: banner, collapse

import Hamburger from './Hamburger';
import Nav from './Nav';
import breakpoints from '../constants/breakpoints';
import colors from '../constants/colors';
import { sansBold } from '../constants/typography';

const MobileWrapper = styled.div`
  border: 1px solid #ddd;
`;

const MobileMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 0 1rem;
  width: 92%;
`;

const MobileMenuTitle = styled.button`
  border: none;
  cursor: pointer;
  color: ${colors.red};
  font-family: ${sansBold};
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 11px 5px;
  text-transform: uppercase;
`;

const MobileNavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 16px 0;
  width: 92%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 30px;
`;

class SiteNav extends Component {
  state = {
    mobileNavIsOpen: false
  };

  handleMobileNavToggle = () =>
    this.setState(({ mobileNavIsOpen }) => ({
      mobileNavIsOpen: !mobileNavIsOpen
    }));

  render() {
    const { mobileMenuTitle, mobileNavBreakpoint } = this.props;
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
              <MobileWrapper>
                <MobileMenuWrapper>
                  <MobileMenuTitle
                    type="button"
                    aria-controls="site-nav"
                    aria-expanded={mobileNavIsOpen}
                    aria-label="Toggle navigation"
                    onClick={this.handleMobileNavToggle}
                  >
                    {mobileMenuTitle}
                  </MobileMenuTitle>
                  <Hamburger
                    aria-controls="site-nav"
                    isOpen={mobileNavIsOpen}
                    onOpen={this.handleMobileNavToggle}
                    onClose={this.handleMobileNavToggle}
                  />
                </MobileMenuWrapper>
                {mobileNavIsOpen && (
                  <MobileNavWrapper>
                    <Nav id="site-nav" mobile>
                      {this.props.children}
                    </Nav>
                  </MobileNavWrapper>
                )}
              </MobileWrapper>
            );
          }
          return (
            <Wrapper>
              <Nav>{this.props.children}</Nav>
            </Wrapper>
          );
        }}
      />
    );
  }
}

SiteNav.propTypes = {
  mobileMenuTitle: PropTypes.string,
  mobileNavBreakpoint: PropTypes.number,
  children: PropTypes.node.isRequired
};

SiteNav.defaultProps = {
  mobileMenuTitle: 'Site Navigation',
  mobileNavBreakpoint: breakpoints.md
};

SiteNav.Item = Nav.Item;
SiteNav.Link = Nav.Link;

export default SiteNav;

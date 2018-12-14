import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { triggerWindowResize } from 'window-test-utils';

import NavbarContext from '../../Navbar/NavbarContext';
import NavbarNav from '../../Navbar/NavbarNav';
import breakpoints from '../../../constants/breakpoints';

const renderNavbarNav = ({
  context = {},
  props = {},
  children = (
    <React.Fragment>
      <NavbarNav.Item>
        <NavbarNav.Link>Link</NavbarNav.Link>
      </NavbarNav.Item>
      <NavbarNav.Item>
        <NavbarNav.Link active>Active Link</NavbarNav.Link>
      </NavbarNav.Item>
      <NavbarNav.Item>
        <NavbarNav.Link disabled>Link</NavbarNav.Link>
      </NavbarNav.Item>
    </React.Fragment>
  )
} = {}) => {
  const { color = 'brown', mobileBreakpoint = breakpoints.md } = context;
  const rtlUtils = render(
    <NavbarContext.Provider value={{ color, mobileBreakpoint }}>
      <NavbarNav {...props}>{children}</NavbarNav>
    </NavbarContext.Provider>
  );
  const navbarNav = rtlUtils.container.firstChild;
  return {
    navbarNav,
    navbarNavMobileNavWrapper: navbarNav.children[1],
    ...rtlUtils
  };
};

it('TODO', () => expect(1).toEqual(1));

describe('NavbarNav', () => {
  describe('when window width is above mobileBreakpoint', () => {
    it('should render default', () => {
      const { navbarNav } = renderNavbarNav();

      expect(navbarNav).toMatchSnapshot();
    });
  });

  describe('when window width is below mobileBreakpoint', () => {
    beforeEach(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    describe('style', () => {
      it('should render a brown mobile navbar nav by default', () => {
        const { navbarNav } = renderNavbarNav();

        expect(navbarNav).toMatchSnapshot();
      });

      it('should render a white mobile navbar nav if variant is provided', () => {
        const { navbarNavMobileNavWrapper } = renderNavbarNav({
          context: { color: 'white' }
        });

        expect(navbarNavMobileNavWrapper).toHaveStyleRule(
          'background-color',
          '#FFFFFF'
        );
      });
    });

    it('should toggle navbar nav collapse', () => {
      const { getByLabelText } = renderNavbarNav();
      const toggleButtonByLabelText = getByLabelText('Toggle navigation');

      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(toggleButtonByLabelText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'true');
      fireEvent.click(toggleButtonByLabelText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

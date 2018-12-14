import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { triggerWindowResize } from 'window-test-utils';

import NavbarContext from '../../Navbar/NavbarContext';
import NavbarGlobalNav from '../../Navbar/NavbarGlobalNav';
import breakpoints from '../../../constants/breakpoints';

const renderNavbarGlobalNav = ({
  context = {},
  props = {},
  children = (
    <React.Fragment>
      <NavbarGlobalNav.Item>
        <NavbarGlobalNav.Link>Link</NavbarGlobalNav.Link>
      </NavbarGlobalNav.Item>
      <NavbarGlobalNav.Item>
        <NavbarGlobalNav.Link active>Active Link</NavbarGlobalNav.Link>
      </NavbarGlobalNav.Item>
      <NavbarGlobalNav.Item>
        <NavbarGlobalNav.Link disabled>Link</NavbarGlobalNav.Link>
      </NavbarGlobalNav.Item>
    </React.Fragment>
  )
} = {}) => {
  const {
    color = 'brown',
    mobileBreakpoint = breakpoints.md,
    toggleTitle = 'Global Navigation'
  } = context;
  const rtlUtils = render(
    <NavbarContext.Provider value={{ color, mobileBreakpoint, toggleTitle }}>
      <NavbarGlobalNav {...props}>{children}</NavbarGlobalNav>
    </NavbarContext.Provider>
  );
  const navbarGlobalNav = rtlUtils.container.firstChild;

  return {
    navbarGlobalNav,
    navbarGlobalNavToggleTitle: navbarGlobalNav.firstChild.children[1],
    navbarGlobalNavCollapseWrapper: navbarGlobalNav.children[1],
    ...rtlUtils
  };
};

describe('NavbarGlobalNav', () => {
  describe('when window width is above mobileBreakpoint', () => {
    describe('style', () => {
      it('should render a brown navbar global nav by default', () => {
        const { navbarGlobalNav } = renderNavbarGlobalNav();

        expect(navbarGlobalNav).toMatchSnapshot();
      });

      it('should render a white navbar global nav if variant is provided', () => {
        const {
          navbarGlobalNavToggleTitle,
          navbarGlobalNavCollapseWrapper
        } = renderNavbarGlobalNav({
          context: { color: 'white' }
        });

        expect(navbarGlobalNavToggleTitle).toHaveStyleRule('color', '#C00404');
        expect(navbarGlobalNavCollapseWrapper).toHaveStyleRule(
          'background-color',
          '#FFFFFF'
        );
      });
    });

    it('should render custom toggle title if provided', () => {
      const { getByText } = renderNavbarGlobalNav({
        context: { toggleTitle: 'Custom Navigation' }
      });

      expect(getByText('Custom Navigation')).toBeInTheDocument();
    });

    it('should toggle navbar global nav collapsee', () => {
      const { getByLabelText, getByText } = renderNavbarGlobalNav();
      const toggleButtonByLabelText = getByLabelText(
        'Toggle global navigation'
      );
      const toggleButtonByText = getByText('Global Navigation');

      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(toggleButtonByLabelText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'true');
      fireEvent.click(toggleButtonByText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('when window width is below mobileBreakpoint', () => {
    beforeEach(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    describe('style', () => {
      it('should render a brown mobile navbar global nav by default', () => {
        const { navbarGlobalNav } = renderNavbarGlobalNav();

        expect(navbarGlobalNav).toMatchSnapshot();
      });

      it('should render a white mobile navbar global nav if variant is provided', () => {
        const { navbarGlobalNavCollapseWrapper } = renderNavbarGlobalNav({
          context: { color: 'white' }
        });

        expect(navbarGlobalNavCollapseWrapper).toHaveStyleRule(
          'background-color',
          '#FFFFFF'
        );
      });
    });

    it('should toggle navbar global nav collapsee', () => {
      const { getByLabelText } = renderNavbarGlobalNav();
      const toggleButtonByLabelText = getByLabelText(
        'Toggle global navigation'
      );

      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(toggleButtonByLabelText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'true');
      fireEvent.click(toggleButtonByLabelText);
      expect(toggleButtonByLabelText).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

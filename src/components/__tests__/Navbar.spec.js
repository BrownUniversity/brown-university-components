import React from 'react';
import { render } from 'react-testing-library';

import Navbar from '../Navbar';

const renderNavbar = ({ props = {}, children = jest.fn() } = {}) => {
  const rtlUtils = render(<Navbar {...props}>{children()}</Navbar>);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Navbar', () => {
  describe('children', () => {
    it('should render children if provided', () => {
      const NavbarChild = () => <div data-testid="navbar-child" />;

      const { getByTestId } = renderNavbar({ children: NavbarChild });

      expect(getByTestId('navbar-child')).toBeInTheDocument();
    });
  });

  describe('style', () => {
    it('should render a brown navbar by default', () => {
      const { tree } = renderNavbar();

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 #00000026;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 75px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 7vw;
  position: relative;
  z-index: 20;
  background-color: #4E3629;
}

.c1 {
  -webkit-text-decoration: none;
  text-decoration: none;
}

.c2 {
  text-align: right;
}

@media (min-width:768px) {
  .c0 {
    padding: 0 33px;
  }
}

<nav
  class="c0"
>
  <a
    class="c1"
    href="http://www.brown.edu/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div
      data-testid="mock-svg"
      height="65"
      width="131"
    />
  </a>
  <div
    class="c2"
  />
</nav>
`);
    });

    it('should render a navbar of another color when color variant is provided', () => {
      const { tree } = renderNavbar({ props: { color: 'white' } });

      expect(tree).toHaveStyleRule('background-color', '#FFFFFF');
    });
  });
});

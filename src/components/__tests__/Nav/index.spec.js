import React from 'react';
import { render } from 'react-testing-library';

import Nav from '../../Nav';

const renderNav = ({ props = {}, children = <li /> } = {}) => {
  const rtlUtils = render(<Nav {...props}>{children}</Nav>);

  return {
    nav: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Nav', () => {
  describe('children', () => {
    it('should render children', () => {
      const children = (
        <span data-testid="nav-children">
          <li>Foo</li>
          <li>Bar</li>
          <li>Baz</li>
        </span>
      );
      const { getByTestId } = renderNav({ children });

      expect(getByTestId('nav-children')).toBeInTheDocument();
    });
  });

  describe('style', () => {
    it('should render nav with default styles', () => {
      const { nav } = renderNav();

      expect(nav).toMatchInlineSnapshot(`
.c0 {
  list-style: none;
  margin: 0;
  background-color: transparent;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0;
  width: auto;
}

<ul
  class="c0"
>
  <li />
</ul>
`);
    });

    it('should render nav with mobile styles when variant is provided', () => {
      const { nav } = renderNav({
        props: { mobile: true }
      });

      expect(nav).toHaveStyleRule('background-color', 'transparent');
      expect(nav).toHaveStyleRule('display', 'block');
      expect(nav).toHaveStyleRule('padding', '0');
      expect(nav).toHaveStyleRule('width', '100%');
    });

    it('should render nav with sub styles when variant is provided', () => {
      const { nav } = renderNav({ props: { sub: true } });

      expect(nav).toHaveStyleRule('background-color', '#F7F7F7');
      expect(nav).toHaveStyleRule('display', 'block');
      expect(nav).toHaveStyleRule('padding', '15px');
      expect(nav).toHaveStyleRule('width', '100%');
    });
  });
});

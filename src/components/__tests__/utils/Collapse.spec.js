import React from 'react';
import { render } from 'react-testing-library';

import Collapse from '../../utils/Collapse';

const transition = 'height 5ms cubic-bezier(0.4,0,0.2,1)';
const renderCollapse = ({ props = {}, children = <div /> } = {}) => {
  const { isOpen = false, ...restProps } = props;
  const rtlUtils = render(
    <Collapse {...restProps} isOpen={isOpen}>
      {children}
    </Collapse>
  );

  return {
    collapse: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Collapse', () => {
  describe('children', () => {
    it('should render children', () => {
      const children = <div data-testid="collapse-children" />;
      const { getByTestId } = renderCollapse({ children });

      expect(getByTestId('collapse-children')).toBeInTheDocument();
    });
  });

  describe('style', () => {
    it('should render closed collapse when isOpen variant is provided', () => {
      const { collapse } = renderCollapse();

      expect(collapse).toMatchInlineSnapshot(`
.c0 {
  will-change: height;
  display: none;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 250ms cubic-bezier(0.4,0,0.2,1);
  transition: height 250ms cubic-bezier(0.4,0,0.2,1);
}

<div
  class="c0"
  display="none"
  height="0"
  overflow="hidden"
>
  <div />
</div>
`);
    });

    it('should render opened collapse when isOpen variant is provided', () => {
      const { collapse } = renderCollapse({ props: { isOpen: true } });

      expect(collapse).toMatchInlineSnapshot(`
.c0 {
  will-change: height;
  display: block;
  height: auto;
  overflow: visible;
  -webkit-transition: height 250ms cubic-bezier(0.4,0,0.2,1);
  transition: height 250ms cubic-bezier(0.4,0,0.2,1);
}

<div
  class="c0"
  display="block"
  height="auto"
  overflow="visible"
>
  <div />
</div>
`);
    });

    it('should render custom transition when provided', () => {
      const { collapse } = renderCollapse({ props: { transition } });

      expect(collapse).toHaveStyleRule('transition', transition);
    });
  });
});

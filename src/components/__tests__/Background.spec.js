import React from 'react';
import { render } from 'react-testing-library';

import Background from '../Background';

const renderBackground = ({ props = {}, children = <div /> } = {}) => {
  const { url = 'background.svg', ...restProps } = props;
  const rtlUtils = render(
    <Background {...restProps} url={url}>
      {children}
    </Background>
  );

  return {
    background: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Background', () => {
  describe('children', () => {
    it('should render children', () => {
      const children = <div data-testid="background-children" />;
      const { getByTestId } = renderBackground({ children });

      expect(getByTestId('background-children')).toBeInTheDocument();
    });
  });

  describe('styles', () => {
    it('should render full white background by default', () => {
      const { background } = renderBackground();

      expect(background).toMatchInlineSnapshot(`
.c0 {
  background-image: url('background.svg');
  background-repeat: repeat;
  background-size: 1600px;
  background-color: #FFF;
}

@media (min-width:1600px) {
  .c0 {
    background-size: 100%;
  }
}

<div
  class="c0"
>
  <div />
</div>
`);
    });

    it('should render gray background when color variant is provided', () => {
      const { background } = renderBackground({ props: { color: 'gray' } });

      expect(background).toHaveStyleRule('background-color', '#F0F3F5');
    });

    it('should render responsive background when variant is provided', () => {
      const { background } = renderBackground({ props: { full: false } });

      expect(background).not.toHaveStyleRule('background-size', '100%', {
        media: '(min-width: 1600px)'
      });
    });
  });
});

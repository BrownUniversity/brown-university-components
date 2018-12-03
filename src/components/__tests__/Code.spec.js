import React from 'react';
import { render } from 'react-testing-library';

import Code from '../Code';

const renderCode = ({ props = {}, children = 'small' } = {}) => {
  const rtlUtils = render(<Code {...props}>{children}</Code>);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Code', () => {
  describe('children', () => {
    it('should render children', () => {
      const { getByText } = renderCode({ children: 'large' });

      expect(getByText('large')).toBeInTheDocument();
    });
  });

  describe('tag', () => {
    it('should render a code element by default', () => {
      const { container } = renderCode();

      expect(container.getElementsByTagName('code')).toHaveLength(1);
    });
  });

  describe('style', () => {
    it('should render default', () => {
      const { tree } = renderCode();

      expect(tree).toMatchInlineSnapshot(`
.c0 {
  background: #f7f7f7;
  border: 0.5px solid #dfe3e6;
  border-radius: 3px;
  font-family: "Bitstream Vera Sans Mono",Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 0.65em;
  padding: 0.5em 0.75em;
  white-space: pre-wrap;
}

<code
  class="c0"
>
  small
</code>
`);
    });
  });
});

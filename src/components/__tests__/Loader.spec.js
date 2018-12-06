import React from 'react';
import { render } from 'react-testing-library';

import Loader from '../Loader';

const renderLoader = ({ props = {} } = {}) => {
  const rtlUtils = render(<Loader {...props} />);

  return {
    tree: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('Button', () => {
  it('should render loader with default height', () => {
    const { tree } = renderLoader(/* { props: { height: 400 } } */);

    // TODO: update when animation name can be deterministic
    // https://github.com/styled-components/jest-styled-components/issues/123
    expect(tree).toMatchInlineSnapshot(`
.c0 svg #rays {
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transform-box: fill-box;
  -ms-transform-box: fill-box;
  transform-box: fill-box;
  -webkit-animation: cZxgpV 7s linear infinite;
  animation: cZxgpV 7s linear infinite;
}

<div
  class="c0"
>
  <div
    data-testid="mock-svg"
    height="250"
    width="192"
  />
</div>
`);
  });

  it('should render with custom height when provided', () => {
    const { getByTestId } = renderLoader({ props: { height: 400 } });

    expect(getByTestId('mock-svg')).toHaveAttribute('height', '400');
  });
});

import React from 'react';
import { render } from 'react-testing-library';

import SubNav from '../SubNav';

const renderSubNav = ({
  props = {},
  children = (
    <React.Fragment>
      <SubNav.Item>
        <SubNav.Link>Link</SubNav.Link>
      </SubNav.Item>
      <SubNav.Item>
        <SubNav.Link active>Active Link</SubNav.Link>
      </SubNav.Item>
      <SubNav.Item>
        <SubNav.Link disabled>Link</SubNav.Link>
      </SubNav.Item>
    </React.Fragment>
  )
} = {}) => {
  const rtlUtils = render(<SubNav {...props}>{children}</SubNav>);

  return {
    subNav: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe('SubNav', () => {
  it('should render default', () => {
    const { subNav } = renderSubNav();

    expect(subNav).toMatchSnapshot();
  });
});

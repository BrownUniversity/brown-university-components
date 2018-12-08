import PropTypes from 'prop-types';
import React from 'react';

import Nav from './Nav';

const SubNav = ({ children, ...restProps }) => (
  <Nav {...restProps} sub>
    {children}
  </Nav>
);

SubNav.propTypes = {
  children: PropTypes.node.isRequired
};

SubNav.Item = Nav.Item;
SubNav.Link = Nav.Link;

export default SubNav;

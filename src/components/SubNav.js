import PropTypes from "prop-types";
import React from "react";
import Nav from "./Nav";

const SubNav = ({ children, ...restProps }) => (
  <nav {...restProps}>
    <Nav sub>{children}</Nav>
  </nav>
);

SubNav.propTypes = {
  children: PropTypes.node.isRequired,
};

SubNav.Item = Nav.Item;
SubNav.Link = Nav.Link;

export default SubNav;

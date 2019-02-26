import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import NavContext from "./NavContext";

/*
  css prop getters
*/
const getPadding = ({ mobile, sub }) => {
  if (mobile) {
    return "1rem 0";
  }

  if (sub) {
    return "8px 0 8px 0";
  }

  return "9px 15px";
};

/*
  inner Tag component
*/
const Tag = styled.li`
  display: list-item;
  border-top: ${({ mobile }) => mobile && "0.5px solid #C8C8C880"};
  padding: ${props => getPadding(props)};
`;

/*
  outer NavItem component
*/
const NavItem = props => (
  <NavContext.Consumer>
    {({ mobile, sub }) => <Tag {...props} mobile={mobile} sub={sub} />}
  </NavContext.Consumer>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavItem;

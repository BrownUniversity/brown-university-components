import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// TODO: nesting (expanded / collapsed)

/*
  inner Tag component
*/
const Tag = styled.li`
  display: list-item;
`;

/*
  outer NavItem component
*/
const NavItem = props => <Tag {...props} />;

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavItem;

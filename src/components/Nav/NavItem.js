import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// TODO: expanded / collapsed

/*
  inner Tag component
*/
const Tag = styled.li`
  display: list-item;
  margin: 0 0 6px 12px;
`;

/*
  outer NavItem component
*/
const NavItem = props => <Tag {...props} />;

NavItem.displayName = 'NavItem';

NavItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavItem;

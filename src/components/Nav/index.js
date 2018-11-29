import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NavContext from './NavContext';
import NavItem from './NavItem';
import NavLink from './NavLink';
import colors from '../../constants/colors';

// TODO: navbar, mobile

/*
  css prop getters
*/
const getBackgroundColor = ({ vertical, sub }) => {
  if (vertical && sub) {
    return colors.lightGray;
  }

  return 'transparent';
};

const getDisplay = ({ vertical }) => {
  if (vertical) {
    return 'block';
  }

  return 'flex';
};

const getPadding = ({ vertical, sub }) => {
  if (vertical && sub) {
    return '15px';
  }

  return '0';
};

const getWidth = ({ vertical }) => {
  if (vertical) {
    return '100%';
  }

  return 'auto';
};

/*
  inner Tag component
*/
const Tag = styled.ul`
  list-style: none;
  margin: 0;
  background-color: ${props => getBackgroundColor(props)};
  display: ${props => getDisplay(props)};
  padding: ${props => getPadding(props)};
  width: ${props => getWidth(props)};
`;

/*
  outer Nav component
*/
const Nav = props => {
  const { vertical } = props;

  return (
    <NavContext.Provider value={{ vertical }}>
      <Tag {...props} />
    </NavContext.Provider>
  );
};

Nav.displayName = 'Nav';

Nav.propTypes = {
  vertical: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Nav.defaultProps = {
  vertical: false
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;

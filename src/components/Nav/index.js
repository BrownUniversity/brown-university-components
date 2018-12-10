import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NavContext from './NavContext';
import NavItem from './NavItem';
import NavLink from './NavLink';
import colors from '../../constants/colors';

/*
  css prop getters
*/
const getBackgroundColor = ({ sub }) => {
  if (sub) {
    return colors.lightGray;
  }

  return 'transparent';
};

const getDisplay = ({ mobile, sub }) => {
  if (mobile || sub) {
    return 'block';
  }

  return 'flex';
};

const getPadding = ({ sub }) => {
  if (sub) {
    return '15px';
  }

  return '0';
};

const getWidth = ({ mobile, sub }) => {
  if (mobile || sub) {
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
  const { navbar, mobile, sub, color } = props;

  return (
    <NavContext.Provider value={{ navbar, mobile, sub, color }}>
      <Tag {...props} />
    </NavContext.Provider>
  );
};

Nav.propTypes = {
  navbar: PropTypes.bool,
  mobile: PropTypes.bool,
  sub: PropTypes.bool,
  color: PropTypes.oneOf(['red', 'white']),
  children: PropTypes.node.isRequired
};

Nav.defaultProps = {
  navbar: false,
  mobile: false,
  sub: false,
  color: 'red'
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;

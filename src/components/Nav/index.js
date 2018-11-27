/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NavContext from './NavContext';
import NavItem from './NavItem';
import NavLink from './NavLink';
import colors from '../../styles/colors';

// TODO: collapse below 900px

/*
  css prop getters
*/
const getBackgroundColor = ({ vertical, sub }) => {
  if (vertical && sub) {
    return colors.lightGray;
  }

  return colors.white;
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

/*
  inner Tag component
*/
const Tag = styled.ul`
  list-style: none;
  margin: 0;
  background-color: ${props => getBackgroundColor(props)};
  display: ${props => getDisplay(props)};
  padding: ${props => getPadding(props)};
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
  children(props, propName, componentName) {
    const childrenProp = props[propName];

    if (
      !Array.isArray(childrenProp) ||
      !childrenProp.every(
        c => c.type.displayName && c.type.displayName === 'NavItem'
      )
    ) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected an array of \`NavItem\` components.`
      );
    }

    return undefined;
  }
};

Nav.defaultProps = {
  vertical: false
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;

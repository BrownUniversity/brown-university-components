/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';
import NavItem from './NavItem';
import NavLink from './NavLink';

// TODO: collapse below 900px

/*
  inner Tag component
*/
const Tag = styled.ul`
  background-color: ${colors.white};
  display: flex;
  list-style: none;
  padding: 0;
`;

/*
  outer Nav component
*/
const Nav = props => <Tag {...props} />;

Nav.displayName = 'Nav';

Nav.propTypes = {
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

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;

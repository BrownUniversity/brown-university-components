/* eslint-disable react/require-default-props */
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
  children(props, propName, componentName) {
    const childrenProp = props[propName];

    if (
      typeof childrenProp !== 'object' ||
      !childrenProp.type.displayName ||
      !childrenProp.type.displayName === 'NavLink'
    ) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`, expected a \`NavLink\` component.`
      );
    }

    return undefined;
  }
};

export default NavItem;

import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import colors from '../../styles/colors';
import { sans } from '../../styles/typography';

/*
  css mixins
*/
const navLinkCSS = css`
  border: none;
  display: block;
  font-family: ${sans};
  font-size: 1.2em;
  padding: 15px 22px;
  text-decoration: none;
`;

const navLinkAfterCSS = css`
  background: ${colors.red};
  content: '';
  display: block;
  height: 3px;
  margin-top: 0.2em;
  transition: width 0.3s;
`;

/*
  css prop getters
*/
const getColor = ({ active }) => {
  if (active) {
    return colors.red;
  }

  return colors.black;
};

const getCursor = ({ disabled, href }) => {
  if (disabled && !href) {
    return 'not-allowed';
  }

  return 'pointer';
};

const getOpacity = ({ disabled }) => {
  if (disabled) {
    return '0.65';
  }

  return '1';
};

const getPointerEvents = ({ disabled, href }) => {
  if (disabled && href) {
    return 'none';
  }

  return 'auto';
};

const getAfterWidth = ({ active }) => {
  if (active) {
    return '100%';
  }

  return '0';
};

const getColorWithHover = ({ disabled }) => {
  if (disabled) {
    return colors.black;
  }

  return colors.red;
};

const getAfterWidthWithHover = ({ disabled }) => {
  if (disabled) {
    return '0';
  }

  return '100%';
};

/*
  inner Tag component
*/
const Tag = styled.div`
  ${navLinkCSS}
  color: ${props => getColor(props)};
  cursor: ${props => getCursor(props)};
  opacity: ${props => getOpacity(props)};
  pointer-events: ${props => getPointerEvents(props)};

  &::after {
    ${navLinkAfterCSS}
    width: ${props => getAfterWidth(props)};
  }

  &:hover {
    color: ${props => getColorWithHover(props)};

    &::after {
      width: ${props => getAfterWidthWithHover(props)};
    }
  }
`;

/*
  outer NavLink component
*/
const deriveTag = ({ href, tag }) => {
  if (href && tag === 'button') {
    return 'a';
  }

  return tag;
};

const NavLink = props => {
  const derivedTag = deriveTag(props);

  return (
    <Tag
      as={derivedTag}
      type={derivedTag === 'button' && props.onClick ? 'button' : undefined}
      {...props}
    />
  );
};

NavLink.displayName = 'Navlink';

NavLink.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  href: PropTypes.string
};

NavLink.defaultProps = {
  active: false,
  disabled: false,
  tag: 'button',
  onClick: null,
  href: null
};

export default NavLink;

import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import NavContext from './NavContext';
import colors from '../../constants/colors';
import { sans } from '../../constants/typography';

// TODO: navbar, mobile

/*
  css mixins
*/
const navLinkCSS = css`
  background: transparent;
  border: none;
  display: block;
  font-family: ${sans};
  text-decoration: none;
`;

const navLinkAfterCSS = css`
  background: ${colors.red};
  content: '';
  display: block;
  height: 3px;
  margin-top: 6px;
  transition: width 0.3s;
`;

/*
  css prop getters
*/
const getColor = ({ vertical, active }) => {
  const activeColor = vertical ? colors.black : colors.red;
  const defaultColor = vertical ? colors.red : colors.black;

  if (active) {
    return activeColor;
  }

  return defaultColor;
};

const getCursor = ({ disabled, href }) => {
  if (disabled && !href) {
    return 'not-allowed';
  }

  return 'pointer';
};

const getFontSize = ({ vertical }) => {
  if (vertical) {
    return '1em';
  }

  return '1.1em';
};

const getPadding = ({ vertical }) => {
  if (vertical) {
    return '8px 0 8px 0';
  }

  return '9px 15px';
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

const getTransition = ({ vertical }) => {
  if (vertical) {
    return 'all .2s ease-in-out';
  }

  return 'background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear';
};

const getAfterWidth = ({ active }) => {
  if (active) {
    return '100%';
  }

  return '0';
};

const getColorWithHover = ({ vertical, disabled }) => {
  const disabledColor = vertical ? colors.red : colors.black;
  const defaultColor = vertical ? colors.black : colors.red;

  if (disabled) {
    return disabledColor;
  }

  return defaultColor;
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
  font-size: ${props => getFontSize(props)};
  opacity: ${props => getOpacity(props)};
  padding: ${props => getPadding(props)};
  pointer-events: ${props => getPointerEvents(props)};
  transition: ${props => getTransition(props)};

  ${props =>
    !props.vertical &&
    css`&::after {
      ${navLinkAfterCSS}
      width: ${getAfterWidth(props)};
    }
  `}

  &:hover {
    color: ${props => getColorWithHover(props)};

    ${props =>
      !props.vertical &&
      css`
        &::after {
          width: ${getAfterWidthWithHover(props)};
        }
      `}

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
    <NavContext.Consumer>
      {({ vertical }) => (
        <Tag
          as={derivedTag}
          type={derivedTag === 'button' && props.onClick ? 'button' : undefined}
          {...props}
          vertical={vertical}
        />
      )}
    </NavContext.Consumer>
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

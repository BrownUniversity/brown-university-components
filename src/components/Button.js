import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import colors from '../styles/colors';
import { sans } from '../styles/typography';

/*
  css mixins
*/
const buttonCSS = css`
  border-width: 0;
  display: inline-block;
  font-family: ${sans};
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 1.5;
  margin: 15px auto;
  padding: 12px 25px 12px 20px;
  text-align: center;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
`;

const buttonAfterCSS = css`
  border-color: transparent transparent transparent transparent;
  border-style: solid;
  border-width: 3.5px 0 3.5px 5px;
  content: '';
  display: inline-block;
  height: 0;
  position: relative;
  right: -8px;
  top: -1px;
  transition: border 0.25s, color 0.25s;
  width: 0;
`;

const buttonAfterShiftCSS = css`
  -ms-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: all 0.25s;
`;

const buttonAfterShiftHoverCSS = css`
  -ms-transform: translate3d(4px, 0, 0);
  -webkit-transform: translate3d(4px, 0, 0);
  transform: translate3d(4px, 0, 0);
  transition: all 0.25s;
`;

/*
  css prop getters
*/
const getBackgroundColor = ({ color, outline, inverse }) => {
  if (inverse) {
    if (outline) {
      return colors[color];
    }

    return colors.white;
  }

  if (outline) {
    return 'transparent';
  }

  return colors[color];
};

const getBoxShadow = ({ color, inverse }) => {
  if (inverse) {
    return colors.white;
  }

  return colors[color];
};

const getColor = ({ color, outline, inverse }) => {
  if (inverse) {
    if (outline) {
      return colors.white;
    }

    return colors.gray;
  }

  if (outline) {
    return colors[color];
  }

  return colors.white;
};

const getCursor = ({ disabled }) => {
  if (disabled) {
    return 'not-allowed';
  }

  return 'pointer';
};

const getFontSize = ({ size }) => {
  switch (size) {
    case 'small':
      return '0.55em';
    case 'large':
      return '0.95em';
    default:
      return '0.75em';
  }
};

const getOpacity = ({ disabled }) => {
  if (disabled) {
    return '0.65';
  }

  return '1';
};

const getBackgroundColorWithHover = ({ color, outline, inverse, disabled }) => {
  if (disabled) {
    return getBackgroundColor({ color, outline, inverse });
  }

  if (inverse) {
    if (outline) {
      return colors.white;
    }

    return colors[color];
  }

  if (outline) {
    return colors[color];
  }

  return darken(0.1, colors[color]);
};

const getBoxShadowWithHover = ({ color, outline, inverse, disabled }) => {
  if (disabled) {
    return getBoxShadow({ color, inverse });
  }

  if (inverse) {
    return colors.white;
  }

  if (outline) {
    return colors[color];
  }

  return darken(0.1, colors[color]);
};

const getColorWithHover = ({ color, outline, inverse, disabled }) => {
  if (disabled) {
    return getColor({ color, outline, inverse });
  }

  if (inverse && outline) {
    return colors.gray;
  }

  return colors.white;
};

/*
  inner Tag component
*/
const Tag = styled.div`
  ${buttonCSS}
  background-color: ${props => getBackgroundColor(props)};
  box-shadow: inset 0 0 0 1px ${props => getBoxShadow(props)};
  color: ${props => getColor(props)};
  cursor: ${props => getCursor(props)};
  font-size: ${props => getFontSize(props)};
  opacity: ${props => getOpacity(props)};

  ${props =>
    props.href &&
    css`
      &::after {
        ${buttonAfterCSS}
        ${buttonAfterShiftCSS}
        border-color: transparent transparent transparent ${getColor(props)};
      }
    `}

  &:hover {
    background-color: ${props => getBackgroundColorWithHover(props)};
    box-shadow: inset 0 0 0 1px ${props => getBoxShadowWithHover(props)};
    color: ${props => getColorWithHover(props)};

    ${props =>
      props.href &&
      css`
        &::after {
          ${buttonAfterShiftHoverCSS}
          border-color: transparent transparent transparent ${getColorWithHover(
            props
          )};
        }
      `}
  }
`;

/*
  outer Button component
*/
const deriveTag = ({ href, tag }) => {
  if (href && tag === 'button') {
    return 'a';
  }

  return tag;
};

const Button = props => {
  const derivedTag = deriveTag(props);

  return (
    <Tag
      as={derivedTag}
      type={derivedTag === 'button' && props.onClick ? 'button' : undefined}
      {...props}
    />
  );
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'red',
    'yellow',
    'brown',
    'gray',
    'emerald',
    'skyblue',
    'navy'
  ]),
  size: PropTypes.oneOf(['default', 'small', 'large']),
  outline: PropTypes.bool,
  inverse: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  href: PropTypes.string
};

Button.defaultProps = {
  color: 'red',
  size: 'default',
  outline: false,
  inverse: false,
  disabled: false,
  tag: 'button',
  onClick: null,
  href: null
};

export default Button;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../styles/colors';

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

const Tag = styled.div`
  background-color: ${props => getBackgroundColor(props)};
  border-width: 0;
  box-shadow: inset 0 0 0 1px ${props => getBoxShadow(props)};
  color: ${props => getColor(props)};
  cursor: ${props => getCursor(props)};
  display: inline-block;
  font-family: Circular-Book, Arial, Helvetica, sans-serif;
  font-size: ${props => getFontSize(props)};
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 1.5;
  margin: 15px auto;
  opacity: ${props => getOpacity(props)};
  padding: 12px 25px 12px 20px;
  text-align: center;
  text-decoration: none !important;
  text-transform: uppercase;
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;

  &:hover {
    background-color: ${props => getBackgroundColorWithHover(props)};
    box-shadow: inset 0 0 0 1px ${props => getBoxShadowWithHover(props)};
    color: ${props => getColorWithHover(props)};
  }
`;

const Button = props => <Tag as={props.href ? 'a' : 'button'} {...props} />;

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
  onClick: PropTypes.func,
  href: PropTypes.string
};

Button.defaultProps = {
  color: 'red',
  size: 'default',
  outline: false,
  inverse: false,
  disabled: false,
  onClick: null,
  href: null
};

export default Button;

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../styles/colors';

const colorMap = {
  red: {
    primary: colors.red,
    secondary: colors.white
  },
  yellow: {
    primary: colors.yellow,
    secondary: colors.white
  },
  brown: {
    primary: colors.brown,
    secondary: colors.white
  },
  gray: {
    primary: colors.gray,
    secondary: colors.white
  },
  emerald: {
    primary: colors.emerald,
    secondary: colors.white
  },
  skyblue: {
    primary: colors.skyblue,
    secondary: colors.white
  },
  navy: {
    primary: colors.navy,
    secondary: colors.white
  }
};

const getBackgroundColor = ({ color, outline }) => {
  if (outline) {
    return 'transparent';
  }

  return colorMap[color].primary;
};

const getColor = ({ color, outline }) => {
  if (outline) {
    return colorMap[color].primary;
  }

  return colorMap[color].secondary;
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

const getColorWithHover = ({ color, outline }) => {
  if (outline) {
    return colorMap[color].secondary;
  }

  return colorMap.white;
};

const getBackgroundColorWithHover = ({ color, outline }) => {
  if (outline) {
    return colorMap[color].primary;
  }

  return darken(0.1, colorMap[color].primary);
};

const getBoxShadowWithHover = ({ color, outline }) => {
  if (outline) {
    return colorMap[color].primary;
  }

  return darken(0.1, colorMap[color].primary);
};

// TODO: font
const Button = styled.button`
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getColor(props)};
  box-shadow: inset 0 0 0 1px ${({ color }) => colorMap[color].primary};
  font-size: ${props => getFontSize(props)};
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  display: inline-block;
  border-width: 0;
  padding: 12px 25px 12px 20px;
  margin: 15px auto;
  cursor: pointer;
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;

  &:hover {
    color: ${props => getColorWithHover(props)};
    background-color: ${props => getBackgroundColorWithHover(props)};
    box-shadow: inset 0 0 0 1px ${props => getBoxShadowWithHover(props)};
  }
`;

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
  outline: PropTypes.bool
};

Button.defaultProps = {
  color: 'red',
  size: 'default',
  outline: false
  // TODO: inverse
};

export default Button;

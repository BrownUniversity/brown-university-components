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

const getPrimaryColor = color => {
  return colorMap[color].primary;
};

const getSecondaryColor = color => {
  return colorMap[color].secondary;
};

const getFontSize = size => {
  switch (size) {
    case 'small':
      return '0.55em';
    case 'large':
      return '0.95em';
    default:
      return '0.75em';
  }
};

// TODO: font
const Button = styled.button`
  background: ${({ color }) => getPrimaryColor(color)};
  color: ${({ color }) => getSecondaryColor(color)};
  box-shadow: inset 0 0 0 1px ${({ color }) => getPrimaryColor(color)};
  font-size: ${({ size }) => getFontSize(size)};
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

  &:hover {
    background-color: ${({ color }) => darken(0.1, getPrimaryColor(color))};
    box-shadow: inset 0 0 0 1px
      ${({ color }) => darken(0.1, getPrimaryColor(color))};
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
  size: PropTypes.oneOf(['default', 'small', 'large'])
};

Button.defaultProps = {
  color: 'red',
  size: 'default'
  // TODO: outline
  // TODO: inverse
};

export default Button;

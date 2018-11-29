import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';

// TODO: Banner.Text

/*
  css prop getters
*/
const getHeight = ({ size }) => {
  switch (size) {
    case 'small':
      return '150px';

    case 'medium':
      return '300px';

    case 'large':
      return '600px';

    default:
      return '200px';
  }
};

/*
  inner components
*/
const BannerWrapper = styled.div`
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;
  width: 100%;
  background-image: ${({ src }) => src && `url(${src})`};
  background-color: ${({ color }) => colors[color]};
  height: ${props => getHeight(props)};
`;

/*
  outer Banner component
*/
const Banner = ({ color, size, src, children }) => (
  <BannerWrapper color={color} size={size} src={src}>
    {children}
  </BannerWrapper>
);

Banner.propTypes = {
  color: PropTypes.oneOf([
    'emerald',
    'red',
    'yellow',
    'gray',
    'skyblue',
    'navy'
  ]),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  src: PropTypes.string,
  children: PropTypes.node
};

Banner.defaultProps = {
  color: 'emerald',
  size: 'default',
  src: null,
  children: null
};

export default Banner;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

/*
  inner Tag component
*/
// TODO: revisit when filtering props from DOM is supported
// https://github.com/styled-components/styled-components/issues/439
const Tag = styled(({ url, color, ...restProps }) => <div {...restProps} />)`
  background-image: url('${({ url }) => url}');
  background-repeat: repeat;
  background-size: 1600px;
  background-color: ${({ color }) => (color === 'gray' ? '#F0F3F5' : '#FFF')};

  @media (min-width: 1600px) {
    background-size: 100%;
  }
`;

/*
  outer Background component
*/
const Background = ({ url, color, ...restProps }) => (
  <Tag {...restProps} url={url} color={color} />
);

Background.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'gray'])
};

Background.defaultProps = {
  color: 'white'
};

export default Background;

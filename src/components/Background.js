import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

/*
  inner Tag component
*/
// TODO: revisit when filtering props from DOM is supported
// https://github.com/styled-components/styled-components/issues/439
const Tag = styled(({ url, color, full, ...restProps }) => (
  <div {...restProps} />
))`
  background-image: url('${({ url }) => url}');
  background-repeat: repeat;
  background-size: 1600px;
  background-color: ${({ color }) => (color === 'gray' ? '#F0F3F5' : '#FFF')};

  ${props =>
    props.full &&
    css`
      @media (min-width: 1600px) {
        background-size: 100%;
      }
    `}
`;

/*
  outer Background component
*/
const Background = ({ url, color, full, ...restProps }) => (
  <Tag {...restProps} url={url} color={color} full={full} />
);

Background.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'gray']),
  full: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Background.defaultProps = {
  color: 'white',
  full: true
};

export default Background;

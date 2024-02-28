import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors } from "brown-university-styles";

/*
  inner Tag component
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
const Tag = styled(({ url, color, full, marginTop, ...restProps }) => (
  <div {...restProps} />
))`
  background-image: url("${({ url }) => url}");
  background-repeat: repeat;
  background-size: 1600px;
  background-color: ${({ color }) => colors[color]};
  background-position-y: ${({ marginTop }) => marginTop}px;

  ${(props) =>
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
  color: PropTypes.oneOf(["white", "lightGray"]),
  full: PropTypes.bool,
  marginTop: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Background.defaultProps = {
  color: "white",
  full: true,
  marginTop: 0,
};

export default Background;

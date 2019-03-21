import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import BannerContext from "./BannerContext";

const { serif } = typography;

/*
  inner Tag component
*/
const Tag = styled.div`
  color: ${colors.white};
  font-family: ${serif};
  font-size: 1.9em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  @media (min-width: ${props => props.mobileBreakpoint}px) {
    font-size: 2.5em;
  }
`;

/*
  outer BannerText component
*/
const BannerText = props => (
  <BannerContext.Consumer>
    {({ mobileBreakpoint }) => (
      <Tag {...props} mobileBreakpoint={mobileBreakpoint} />
    )}
  </BannerContext.Consumer>
);

BannerText.propTypes = {
  children: PropTypes.string.isRequired
};

export default BannerText;

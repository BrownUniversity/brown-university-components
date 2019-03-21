import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "brown-university-styles";
import BannerContext from "./BannerContext";
import BannerText from "./BannerText";

/*
  css prop getters
*/
const getMaxHeight = ({ size }) => {
  switch (size) {
    case "small":
      return "150px";

    case "medium":
      return "300px";

    case "large":
      return "600px";

    default:
      return "200px";
  }
};

/*
  inner components
*/
const BannerWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

const BannerImageColorWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${props => getMaxHeight(props)};
`;

const BannerImage = styled.img`
  height: auto;
  min-width: 320px;
  max-width: 100%;
  width: 100%;
  display: block;
`;

const BannerChildrenWrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 15;
  top: ${props => (props.size === "small" ? "5%" : "35%")};

  @media (min-width: ${props => props.mobileBreakpoint}px) {
    top: ${({ size }) => (size === "small" ? "20%" : "35%")};
  }
`;

/*
  outer Banner component
*/
const Banner = ({
  color,
  size,
  src,
  children,
  mobileBreakpoint,
  ...restProps
}) => (
  <BannerWrapper {...restProps}>
    <BannerImageColorWrapper size={size}>
      {src ? (
        <BannerImage src={src} alt="Banner" />
      ) : (
        <svg display="block" viewBox="0 0 2600 600">
          <rect
            aria-hidden="true"
            focusable="false"
            width="100%"
            height="100%"
            fill={colors[color]}
          />
        </svg>
      )}
    </BannerImageColorWrapper>
    <BannerChildrenWrapper size={size} mobileBreakpoint={mobileBreakpoint}>
      <BannerContext.Provider value={{ mobileBreakpoint }}>
        {children}
      </BannerContext.Provider>
    </BannerChildrenWrapper>
  </BannerWrapper>
);

Banner.propTypes = {
  color: PropTypes.oneOf([
    "emerald",
    "red",
    "brown",
    "yellow",
    "gray",
    "sand",
    "lightBrown",
    "mediumBrown",
    "navy",
    "skyBlue"
  ]),
  size: PropTypes.oneOf(["default", "small", "medium", "large"]),
  src: PropTypes.string,
  children: PropTypes.node,
  mobileBreakpoint: PropTypes.number
};

Banner.defaultProps = {
  color: "emerald",
  size: "default",
  src: null,
  children: null,
  mobileBreakpoint: breakpoints.md
};

Banner.Text = BannerText;

export default Banner;

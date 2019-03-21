import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "brown-university-styles";
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
  top: ${({ size }) => (size === "small" ? "20%" : "35%")};
  top: ${({ size, mobile }) => size === "small" && mobile && "5%"};
  width: 100%;
  z-index: 15;
`;

/*
  outer Banner component
*/
const Banner = ({ color, size, src, children, mobile, ...restProps }) => (
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
    <BannerChildrenWrapper size={size} mobile={mobile}>
      {children}
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
  mobile: PropTypes.bool
};

Banner.defaultProps = {
  color: "emerald",
  size: "default",
  src: null,
  children: null,
  mobile: false
};

Banner.Text = BannerText;

export default Banner;

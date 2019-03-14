import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors, typography } from "brown-university-styles";
import NavContext from "./NavContext";
import media from "../../media";

const { sans } = typography;

/*
  css mixins
*/
const navLinkCSS = css`
  background: transparent;
  border: none;
  display: block;
  font-family: ${sans};
  padding: 0;
  text-decoration: none !important;
`;

const navLinkAfterCSS = css`
  content: "";
  display: block;
  height: 3px;
`;

/*
  css prop getters
*/
const getColor = ({ active, mobile, sub, color }) => {
  let activeColor;
  let defaultColor;

  if (mobile || sub) {
    switch (color) {
      case "white":
        activeColor = colors.sand;
        defaultColor = colors.white;
        break;

      // red
      default:
        activeColor = colors.black;
        defaultColor = colors.red;
        break;
    }
  } else {
    switch (color) {
      case "white":
        activeColor = colors.sand;
        defaultColor = colors.white;
        break;

      // red
      default:
        activeColor = colors.red;
        defaultColor = colors.black;
        break;
    }
  }

  if (active) {
    return activeColor;
  }

  return defaultColor;
};

const getCursor = ({ disabled, href }) => {
  if (disabled && !href) {
    return "not-allowed";
  }

  return "pointer";
};

const getFontSize = ({ navbar, mobile }) => {
  if (navbar || mobile) {
    return "1em";
  }

  return "1.1em";
};

const getFontWeight = ({ navbar, sub }) => {
  if (navbar || sub) {
    return "400";
  }

  return "700";
};

const getLineHeight = ({ navbar, mobile, sub }) => {
  if (navbar || mobile || sub) {
    return "1.5";
  }

  return "1";
};
const getOpacity = ({ disabled, color }) => {
  if (disabled && color !== "white") {
    return "0.65";
  }

  return "1";
};

const getPointerEvents = ({ disabled, href }) => {
  if (disabled && href) {
    return "none";
  }

  return "auto";
};

const getTransition = ({ mobile, sub, href }) => {
  if (mobile || sub) {
    return "all .2s ease-in-out";
  }

  if (!href) {
    return null;
  }

  return "background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear";
};

const getAfterMarginTop = ({ navbar }) => {
  if (navbar) {
    return "0.25em";
  }

  return "1em";
};
const getAfterWidth = ({ active }) => {
  if (active) {
    return "100%";
  }

  return "0";
};

const getColorWithHover = ({ disabled, mobile, sub, color }) => {
  let disabledColor;
  let defaultColor;

  if (mobile || sub) {
    switch (color) {
      case "white":
        disabledColor = colors.white;
        defaultColor = colors.sand;
        break;

      // red
      default:
        disabledColor = colors.red;
        defaultColor = colors.black;
        break;
    }
  } else {
    switch (color) {
      case "white":
        disabledColor = colors.white;
        defaultColor = colors.sand;
        break;

      // red
      default:
        disabledColor = colors.black;
        defaultColor = colors.red;
        break;
    }
  }

  if (disabled) {
    return disabledColor;
  }

  return defaultColor;
};

const getAfterWidthWithHover = ({ disabled }) => {
  if (disabled) {
    return "0";
  }

  return "100%";
};

/*
  inner Tag component
*/
// TODO: filter active, navbar, mobile, sub and color props with `as` usage (see `styled-components` issue 439)
const Tag = styled.div`
  ${navLinkCSS}
  color: ${props => getColor(props)};
  cursor: ${props => getCursor(props)};
  font-size: ${props => getFontSize(props)};
  font-weight: ${props => getFontWeight(props)};
  line-height: ${props => getLineHeight(props)};
  opacity: ${props => getOpacity(props)};
  pointer-events: ${props => getPointerEvents(props)};
  transition: ${props => getTransition(props)};

  ${media.xl`
    font-size: ${({ navbar, mobile, sub }) =>
      !(navbar || mobile || sub) && " 1.2em"};
  `};

  ${props =>
    !(props.mobile || props.sub) &&
    css`&::after {
      ${navLinkAfterCSS}
      ${props.href && "transition: width 0.3s;"}
      background: ${({ color }) =>
        color === "white" ? colors.sand : colors.red};
      margin-top: ${getAfterMarginTop(props)};
      width: ${getAfterWidth(props)};
    }
  `}

  &:hover {
    color: ${props => getColorWithHover(props)};

    ${props =>
      !(props.mobile || props.sub) &&
      css`
        &::after {
          width: ${getAfterWidthWithHover(props)};
        }
      `}

  }
`;

/*
  outer NavLink component
*/
const deriveTag = ({ tag, href }) => {
  if (tag === "button" && href) {
    return "a";
  }

  return tag;
};

const NavLink = props => {
  const { tag, ...restProps } = props;
  const derivedTag = deriveTag(props);

  return (
    <NavContext.Consumer>
      {({ navbar, mobile, sub, color }) => (
        <Tag
          as={derivedTag}
          type={derivedTag === "button" && props.onClick ? "button" : undefined}
          {...restProps}
          navbar={navbar}
          mobile={mobile}
          sub={sub}
          color={color}
        />
      )}
    </NavContext.Consumer>
  );
};

NavLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string
};

NavLink.defaultProps = {
  tag: "button",
  active: false,
  disabled: false,
  onClick: null,
  href: null
};

export default NavLink;

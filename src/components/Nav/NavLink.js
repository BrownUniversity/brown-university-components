import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import NavContext from './NavContext';
import colors from '../../constants/colors';
import media from '../../constants/media';
import { sans } from '../../constants/typography';

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
  background: ${colors.red};
  content: '';
  display: block;
  height: 3px;
  transition: width 0.3s;
`;

/*
  css prop getters
*/
const getColor = ({ active, mobile, sub }) => {
  const activeColor = mobile || sub ? colors.black : colors.red;
  const defaultColor = mobile || sub ? colors.red : colors.black;

  if (active) {
    return activeColor;
  }

  return defaultColor;
};

const getCursor = ({ disabled, href }) => {
  if (disabled && !href) {
    return 'not-allowed';
  }

  return 'pointer';
};

const getFontSize = ({ navbar, mobile }) => {
  if (navbar || mobile) {
    return '1em';
  }

  return '1.1em';
};

const getFontWeight = ({ navbar, sub }) => {
  if (navbar || sub) {
    return '400';
  }

  return '700';
};

const getLineHeight = ({ navbar, mobile, sub }) => {
  if (navbar || mobile || sub) {
    return '1.5';
  }

  return '1';
};
const getOpacity = ({ disabled }) => {
  if (disabled) {
    return '0.65';
  }

  return '1';
};

const getPointerEvents = ({ disabled, href }) => {
  if (disabled && href) {
    return 'none';
  }

  return 'auto';
};

const getTransition = ({ mobile, sub }) => {
  if (mobile || sub) {
    return 'all .2s ease-in-out';
  }

  return 'background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear';
};

const getAfterMarginTop = ({ navbar }) => {
  if (navbar) {
    return '0.25em';
  }

  return '1em';
};
const getAfterWidth = ({ active }) => {
  if (active) {
    return '100%';
  }

  return '0';
};

const getColorWithHover = ({ disabled, mobile, sub }) => {
  const disabledColor = mobile || sub ? colors.red : colors.black;
  const defaultColor = mobile || sub ? colors.black : colors.red;

  if (disabled) {
    return disabledColor;
  }

  return defaultColor;
};

const getAfterWidthWithHover = ({ disabled }) => {
  if (disabled) {
    return '0';
  }

  return '100%';
};

/*
  inner Tag component
*/
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
      !(navbar || mobile || sub) && ' 1.2em'};
  `};

  ${props =>
    !(props.mobile || props.sub) &&
    css`&::after {
      ${navLinkAfterCSS}
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
const deriveTag = ({ href, tag }) => {
  if (href && tag === 'button') {
    return 'a';
  }

  return tag;
};

const NavLink = props => {
  const derivedTag = deriveTag(props);

  return (
    <NavContext.Consumer>
      {({ navbar, mobile, sub }) => (
        <Tag
          as={derivedTag}
          type={derivedTag === 'button' && props.onClick ? 'button' : undefined}
          {...props}
          navbar={navbar}
          mobile={mobile}
          sub={sub}
        />
      )}
    </NavContext.Consumer>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  navbar: PropTypes.bool,
  mobile: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string
};

NavLink.defaultProps = {
  active: false,
  disabled: false,
  tag: 'button',
  navbar: false,
  mobile: false,
  onClick: null,
  href: null
};

export default NavLink;

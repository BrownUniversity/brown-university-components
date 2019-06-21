import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors, typography, getRems } from "brown-university-styles";
import media from "../../media";
import { unstyledLinkCSS } from "../../mixins";
import ArrowRightSVG from "../../assets/svg/inline/icons/arrow-right.svg";
import LinkSVG from "../../assets/svg/inline/icons/link.svg";

/*
  css mixins
*/
const iconWrapperCSS = css`
  display: inline-block;
  vertical-align: middle;
`;

const iconCSS = css`
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: opacity 0.25s;
`;

/*
  inner components
*/
const Label = styled.span`
  display: inline;
  font-family: ${typography.sans};
  font-size: ${getRems(12)};
  font-weight: 400;
  letter-spacing: ${getRems(1.5)};
  margin-right: 4px;
  text-transform: uppercase;

  ${media.sm`
  font-size: ${getRems(13)};
  `};
`;

const IconsWrapper = styled.span`
  ${iconWrapperCSS}
  height: 14px;
  position: relative;
  width: 14px;
`;

const DefaultIconWrapper = styled.span`
  ${iconWrapperCSS}
  height: 9px;
  width: 14px;
`;

const ActionIconWrapper = styled.span`
  ${iconWrapperCSS}
  height: 14px;
  width: 14px;
`;

const DefaultIcon = styled(ArrowRightSVG)`
  ${iconCSS}
  fill: ${colors.gold};
`;

const ActionIcon = styled(LinkSVG)`
  ${iconCSS}
  fill: ${colors.white};
`;

const Tag = styled.a`
  ${unstyledLinkCSS}
  color: ${colors.gold};
  transition: background 0.25s, color 0.25s;

  ${ActionIcon} {
    opacity: 0;
  }

  &:hover,
  &:focus {
    color: ${colors.white};

    ${DefaultIcon} {
      opacity: 0;
    }

    ${ActionIcon} {
      opacity: 1;
    }
  }
`;

/*
  outer FooterLink component
*/
const FooterLink = ({ href, children, ...restProps }) => {
  return (
    <Tag href={href} {...restProps}>
      <Label>{children}</Label>
      <IconsWrapper>
        <DefaultIconWrapper>
          <DefaultIcon />
        </DefaultIconWrapper>
        <ActionIconWrapper>
          <ActionIcon />
        </ActionIconWrapper>
      </IconsWrapper>
    </Tag>
  );
};

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FooterLink;

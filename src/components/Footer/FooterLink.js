import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors, typography, getRems } from "brown-university-styles";
import media from "../../media";
import { unstyledLinkCSS } from "../../mixins";
import ArrowRightSVG from "../../assets/svg/inline/arrow-right.svg";
import LinkSVG from "../../assets/svg/inline/link.svg";

/*
  css mixins
*/
const iconWrapperCSS = css`
  position: relative;
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
  font-family: ${typography.sansSerif};
  font-size: ${getRems(12)};
  font-weight: 400;
  letter-spacing: ${getRems(1.5)};
  margin-right: 2px;
  text-transform: uppercase;

  ${media.sm`
  font-size: ${getRems(13)};
  `};
`;

const DefaultIconWrapper = styled.span`
  ${iconWrapperCSS}
`;

const ActionIconWrapper = styled.span`
  ${iconWrapperCSS}
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
  padding: 10px 0;
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
const FooterLink = ({ href, children }) => {
  return (
    <Tag href={href}>
      <Label>{children}</Label>
      <DefaultIconWrapper>
        <DefaultIcon />
      </DefaultIconWrapper>
      <ActionIconWrapper>
        <ActionIcon />
      </ActionIconWrapper>
    </Tag>
  );
};

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default FooterLink;

import React from "react";
import styled, { css } from "styled-components";
import {
  breakpoints,
  colors,
  typography,
  getRems
} from "brown-university-styles";
import FooterLink from "./FooterLink";
import giveLogoSrc from "./logo-together";
import media from "../../media";
import { unstyledLinkCSS } from "../../mixins";
import MarkerSVG from "../../assets/svg/inline/marker.svg";
import PhoneSVG from "../../assets/svg/inline/phone.svg";

const ribbonAssideWidth = 325;

/*
  css mixins
*/
const addressItemCSS = css`
  ${unstyledLinkCSS}
  display: block;
  padding-left: 25px;
  position: relative;

  ${media.lg`
    display: inline-block;
    vertical-align: top;
  `};
`;

const addressIconCSS = css`
  fill: rgba(255, 255, 255, 0.2);
  left: 0;
  position: absolute;
  top: 0;
  transform-origin: left top;

  ${media.xl`
    top: 2px;
  `};
`;

/*
  inner components
*/
const Margins = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;

  ${media.sm`
    width: ${breakpoints.sm - 20}px;
  `};

  ${media.md`
    width: ${breakpoints.md - 20}px;
  `};

  ${media.lg`
    width: ${breakpoints.lg - 20}px;
  `};

  ${media.xl`
    width: ${breakpoints.xl - 20}px;
  `};

  @media (min-width: 1370px) {
    width: 1350px;
  }
`;

const Wrapper = styled.footer`
  background-color: ${colors.brown};
`;

const RibbonOuter = styled.div`
  padding: 40px 0 50px;

  ${media.md`
    padding: 60px 0 70px;
  `};

  ${media.lg`
    padding: 90px 0 45px;
  `};
`;

const RibbonInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lg`
    flex-direction: row;
  `};
`;

const RibbonGroup = styled.div`
  ${media.lg`
    border-right: 1px solid rgba(183, 176, 156, 0.2);
    padding-top: 15px;
    padding-right: 50px;
    width: calc(100% - ${ribbonAssideWidth}px);
  `};
`;

const AddressWrapper = styled.div`
  margin-bottom: 16px;

  ${media.xl`
    margin-bottom: 12px;
  `};
`;

const AddressName = styled.span`
  color: ${colors.taupe};
  display: block;
  font-family: ${typography.sans};
  font-size: ${getRems(11)};
  font-weight: 400;
  letter-spacing: ${getRems(1.25)};
  margin-bottom: 26px;
  text-transform: uppercase;

  ${media.md`
    font-size: ${getRems(13)};
    letter-spacing: ${getRems(1.5)};
  `};

  ${media.lg`
    margin-bottom: 28px;
  `};
`;

const AddressItems = styled.div``;

const AddressBaseItem = styled.a`
  ${addressItemCSS}
  margin-bottom: 14px;

  ${media.lg`
    margin-right: 40px;
    margin-bottom: 0;
  `};
`;

const AddressPhoneItem = styled.a`
  ${addressItemCSS}
`;

const AddressBaseIcon = styled(MarkerSVG)`
  ${addressIconCSS}
  transform: scale(0.85);
`;

const AddressPhoneIcon = styled(PhoneSVG)`
  ${addressIconCSS}
`;

const AddressInfo = styled.span`
  color: ${colors.white};
  font-family: ${typography.serif};
  font-weight: 400;
  line-height: 1.3125;

  ${media.md`
    font-size: ${getRems(20)};
    line-height: 1.25;
  `};

  ${media.xl`
    font-size: ${getRems(24)};
    line-height: 1.33333;
  `};
`;

const RibbonAsside = styled.div`
  ${media.lg`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-left: 50px;
    width: ${ribbonAssideWidth}px;
  `};
`;

const GiveWrapper = styled.div`
  ${media.lg`
    width: 100%;
  `};
`;

const GiveLogo = styled.img`
  max-width: 202px;
  width: 100%;
  margin-bottom: 18px;
`;

const GiveCaption = styled.p`
  color: ${colors.taupe};
  font-family: ${typography.serif};
  font-size: ${getRems(24)};
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  margin: 0 0 16px;
`;

const SoleOuter = styled.div`
  background: ${colors.transparentBlack};
  padding: 14px 0 26px;

  ${media.md`
    padding: 0;
  `};
`;

const SoleInner = styled.div`
  ${media.md`
    align-items: center;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
  `};
`;

/*
  outer Footer component
*/
const Footer = () => (
  <Wrapper>
    <RibbonOuter>
      <Margins>
        <RibbonInner>
          <RibbonGroup>
            <AddressWrapper>
              <AddressName>Brown University</AddressName>
              <AddressItems>
                <AddressBaseItem
                  href="https://www.google.com/maps/dir/?api=1&amp;destination=Brown%20University%2075%20Waterman%20Street%20%20%20%20%20%20%20%20Providence%2C%20RI%2002912"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AddressBaseIcon />{" "}
                  <AddressInfo>Providence, RI 02912</AddressInfo>
                </AddressBaseItem>
                <AddressPhoneItem href="tel:4018631000">
                  <AddressPhoneIcon /> <AddressInfo>401-863-1000</AddressInfo>
                </AddressPhoneItem>
              </AddressItems>
            </AddressWrapper>
          </RibbonGroup>
          <RibbonAsside>
            <GiveWrapper>
              <GiveLogo src={giveLogoSrc} />
              <GiveCaption>
                The campaign for building on distinction
              </GiveCaption>
              <FooterLink href="https://giving.brown.edu/">
                Give To Brown
              </FooterLink>
            </GiveWrapper>
          </RibbonAsside>
        </RibbonInner>
      </Margins>
    </RibbonOuter>
    <SoleOuter>
      <Margins>
        <SoleInner>TODO</SoleInner>
      </Margins>
    </SoleOuter>
  </Wrapper>
);

export default Footer;

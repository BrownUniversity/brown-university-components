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
import { srOnlyCSS, unstyledLinkCSS } from "../../mixins";
import MarkerSVG from "../../assets/svg/inline/icons/marker.svg";
import PhoneSVG from "../../assets/svg/inline/icons/phone.svg";
import FacebookSVG from "../../assets/svg/inline/icons/facebook.svg";
import InstagramSVG from "../../assets/svg/inline/icons/instagram.svg";
import LinkedInSVG from "../../assets/svg/inline/icons/linkedin.svg";
import SnapchatSVG from "../../assets/svg/inline/icons/snapchat.svg";
import TwitterSVG from "../../assets/svg/inline/icons/twitter.svg";
import YouTubeSVG from "../../assets/svg/inline/icons/youtube.svg";

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

const socialIconCSS = css`
  fill: ${colors.white};

  &:hover,
  &:focus {
    fill: ${colors.gold};
  }
`;

/*
  inner components
*/
const PaddedFooterLink = styled(FooterLink)`
  display: block;
  padding: 10px 0;
`;

const Margins = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  width: calc(100% - 40px);

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

  ${media.xxl`
    width: ${breakpoints.xxl - 20}px;
  `};
`;

const Wrapper = styled.footer`
  background-color: ${colors.brown};

  * {
    box-sizing: border-box;
  }
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
  height: 24px;
  width: 17px;
`;

const AddressPhoneIcon = styled(PhoneSVG)`
  ${addressIconCSS}
  height: 17px;
  width: 17px;
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

const NavigationHeader = styled.h2`
  ${srOnlyCSS}
`;

const QuickNavWrapper = styled.nav`
  margin-bottom: 20px;

  ${media.xxl`
    margin-bottom: 30px;
  `};
`;

const QuickNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.md`
    display: flex;
    flex-wrap: wrap;
  `};
`;

const QuickNavListItem = styled.li`
  ${media.md`
    padding-right: 20px;
    width: 50%;
  `};

  ${media.xxl`
    padding-right: 32px;
    width: auto;
  `};
`;

const FooterNavWrapper = styled.nav`
  margin-bottom: 40px;

  ${media.lg`
    border-top: 1px solid rgba(183, 176, 156, 0.2);
    margin-bottom: 0;
  `};

  ${media.xxl`
    display: inline-block;
    vertical-align: top;
  `};

  &:before,
  &:after {
    background: rgba(183, 176, 156, 0.4);
    content: "";
    display: block;
    height: 1px;
    margin: 0 -10px;
    width: calc(100% + 20px);

    ${media.lg`
      display: none;
    `};
  }
`;

const FooterNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;

  ${media.md`
    display: flex;
    flex-wrap: wrap;
  `};

  ${media.xxl`
    padding: 30px 0 35px;
  `};
`;

const FooterNavListItem = styled.li`
  ${media.md`
    padding-right: 20px;
    width: 50%;
  `};

  ${media.xxl`
    padding-right: 32px;
    width: auto;
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
  width: 100%;

  ${media.md`
    align-items: center;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
  `};
`;

const SocialNavWrapper = styled.nav`
  margin-bottom: 14px;

  ${media.md`
    margin-bottom: 0;
    order: 2;
  `};
`;

const SocialNavList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 -8px;
  padding: 0;
`;

const SocialNavListItem = styled.li`
  display: inline-block;
  vertical-align: middle;

  ${media.md`
    width: auto;
  `};
`;

const SocialNavLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  ${unstyledLinkCSS}
  box-shadow: inset 0 0 0 1px transparent;
  display: flex;
  justify-content: center;
  padding: 17px 8px;
  position: relative;
  text-align: center;
  transition: color 0.25s;

  ${media.md`
    padding: 19px 15px;
  `};
`;

const SocialFacebookIcon = styled(FacebookSVG)`
  ${socialIconCSS}
  height: 22px;
  width: 22px;
`;

const SocialInstagramIcon = styled(InstagramSVG)`
  ${socialIconCSS}
  height: 22px;
  width: 22px;
`;

const SocialLinkedInIcon = styled(LinkedInSVG)`
  ${socialIconCSS}
  height: 22px;
  width: 22px;
`;

const SocialSnapchatIcon = styled(SnapchatSVG)`
  ${socialIconCSS}
  height: 20px;
  width: 22px;
`;

const SocialTwitterIcon = styled(TwitterSVG)`
  ${socialIconCSS}
  height: 18px;
  width: 22px;
`;

const SocialYouTubeIcon = styled(YouTubeSVG)`
  ${socialIconCSS}
  height: 16px;
  width: 22px;
`;

const SocialIconLabel = styled.span`
  ${srOnlyCSS}
`;

const Copyright = styled.p`
  border-top: 1px solid rgba(183, 176, 156, 0.2);
  color: ${colors.taupe};
  font-family: ${typography.serif};
  font-size: ${getRems(14)};
  font-weight: 400;
  margin: 0 -10px;
  padding-top: 20px;

  ${media.md`
    border-top: 0;
    font-size: ${getRems(20)};
    margin: 0;
    order: 1;
    padding-top: 0;
    position: relative;
    top: 2px;
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
            <QuickNavWrapper>
              <NavigationHeader>Quick Navigation</NavigationHeader>
              <QuickNavList aria-label="Quick Navigation">
                <QuickNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/about/visit">
                    Visit Brown
                  </PaddedFooterLink>
                </QuickNavListItem>
                <QuickNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/Facilities/Facilities_Management/maps/#building/">
                    Campus Map
                  </PaddedFooterLink>
                </QuickNavListItem>
                <QuickNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/a-z">
                    A to Z
                  </PaddedFooterLink>
                </QuickNavListItem>
                <QuickNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/about/contact-us">
                    Contact Us
                  </PaddedFooterLink>
                </QuickNavListItem>
              </QuickNavList>
            </QuickNavWrapper>
            <FooterNavWrapper>
              <NavigationHeader>Footer Navigation</NavigationHeader>
              <FooterNavList aria-label="Footer Navigation">
                <FooterNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/news">
                    News
                  </PaddedFooterLink>
                </FooterNavListItem>
                <FooterNavListItem>
                  <PaddedFooterLink href="https://events.brown.edu/">
                    Events
                  </PaddedFooterLink>
                </FooterNavListItem>
                <FooterNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/about/administration/public-safety/">
                    Campus Safety
                  </PaddedFooterLink>
                </FooterNavListItem>
                <FooterNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/website-accessibility">
                    Accessibility
                  </PaddedFooterLink>
                </FooterNavListItem>
                <FooterNavListItem>
                  <PaddedFooterLink href="https://www.brown.edu/about/administration/human-resources/employment-performance-development/jobsbrown">
                    Careers At Brown
                  </PaddedFooterLink>
                </FooterNavListItem>
              </FooterNavList>
            </FooterNavWrapper>
          </RibbonGroup>
          <RibbonAsside>
            <GiveWrapper>
              <GiveLogo src={giveLogoSrc} alt="Brown Together" />
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
        <SoleInner>
          <SocialNavWrapper>
            <NavigationHeader>Social Navigation</NavigationHeader>
            <SocialNavList aria-label="Social Navigation">
              <SocialNavListItem>
                <SocialNavLink href="https://www.facebook.com/BrownUniversity">
                  <SocialFacebookIcon />
                  <SocialIconLabel>Facebook</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
              <SocialNavListItem>
                <SocialNavLink href="https://instagram.com/brownu">
                  <SocialInstagramIcon />
                  <SocialIconLabel>Instagram</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
              <SocialNavListItem>
                <SocialNavLink href="https://www.linkedin.com/edu/school?id=19348">
                  <SocialLinkedInIcon />
                  <SocialIconLabel>LinkedIn</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
              <SocialNavListItem>
                <SocialNavLink href="https://www.snapchat.com/add/brown-u">
                  <SocialSnapchatIcon />
                  <SocialIconLabel>Snapchat</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
              <SocialNavListItem>
                <SocialNavLink href="https://twitter.com/BrownUniversity">
                  <SocialTwitterIcon />
                  <SocialIconLabel>Twitter</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
              <SocialNavListItem>
                <SocialNavLink href="https://www.youtube.com/brownuniversity">
                  <SocialYouTubeIcon />
                  <SocialIconLabel>YouTube</SocialIconLabel>
                </SocialNavLink>
              </SocialNavListItem>
            </SocialNavList>
          </SocialNavWrapper>
          <Copyright>© Brown University</Copyright>
        </SoleInner>
      </Margins>
    </SoleOuter>
  </Wrapper>
);

export default Footer;

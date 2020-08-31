import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import {
  // icons (fastspot)
  AppleSVG,
  ArrowLeftSVG,
  ArrowOutSVG,
  ArrowRightSVG,
  BestBuySVG,
  BookmarkSVG,
  CameraSVG,
  CaretDownSVG,
  ChevronDownSVG,
  ChevronLeftSVG,
  ChevronRightSVG,
  ClockSVG,
  CloseSVG,
  CloseMiniSVG,
  DeleteSVG,
  DotsSVG,
  DownloadSVG,
  EmailSVG,
  FacebookSVG,
  FlickrSVG,
  InstagramSVG,
  LinkSVG,
  LinkedInSVG,
  LockSVG,
  MailSVG,
  MarkerSVG,
  MenuSVG,
  PauseSVG,
  PhoneSVG,
  PhoneAltSVG,
  PlaySVG,
  PlusSVG,
  SearchSVG,
  SnapchatSVG,
  StarSVG,
  TwitterSVG,
  UserSVG,
  VimeoSVG,
  WorldSVG,
  YouTubeSVG,
  // icons (other)
  CalendarSVG,
  CheckMarkSVG,
  DraggableSVG,
  ErrorSVG,
  FilterSVG,
  ListSearchSVG
} from "../src";

const svgColor = colors.gray;

const StoryWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const SVGWrapper = styled.div`
  padding: 10px;
  text-align: center;
  width: 150px;

  svg {
    fill: ${svgColor};
    max-height: 50px;
    max-width: 50px;
  }
`;

const SVGName = styled.p`
  font-family: ${typography.sansBold};
  margin-bottom: 20px;
`;

storiesOf("svg", module)
  .add("icons (Fastspot)", () => (
    <StoryWrapper>
      <SVGWrapper>
        <SVGName>AppleSVG</SVGName>
        <AppleSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ArrowLeftSVG</SVGName>
        <ArrowLeftSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ArrowRightSVG</SVGName>
        <ArrowRightSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ArrowOutSVG</SVGName>
        <ArrowOutSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>BestBuySVG</SVGName>
        <BestBuySVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>BookmarkSVG</SVGName>
        <BookmarkSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>CameraSVG</SVGName>
        <CameraSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>CaretDownSVG</SVGName>
        <CaretDownSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ChevronDownSVG</SVGName>
        <ChevronDownSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ChevronLeftSVG</SVGName>
        <ChevronLeftSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ChevronRightSVG</SVGName>
        <ChevronRightSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ClockSVG</SVGName>
        <ClockSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>CloseSVG</SVGName>
        <CloseSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>CloseMiniSVG</SVGName>
        <CloseMiniSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>DeleteSVG</SVGName>
        <DeleteSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>DotsSVG</SVGName>
        <DotsSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>DownloadSVG</SVGName>
        <DownloadSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>EmailSVG</SVGName>
        <EmailSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>FacebookSVG</SVGName>
        <FacebookSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>FlickrSVG</SVGName>
        <FlickrSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>InstagramSVG</SVGName>
        <InstagramSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>LinkSVG</SVGName>
        <LinkSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>LinkedInSVG</SVGName>
        <LinkedInSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>LockSVG</SVGName>
        <LockSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>MailSVG</SVGName>
        <MailSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>MarkerSVG</SVGName>
        <MarkerSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>MenuSVG</SVGName>
        <MenuSVG
          css={`
            stroke: ${svgColor};
          `}
        />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>PauseSVG</SVGName>
        <PauseSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>PhoneSVG</SVGName>
        <PhoneSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>PhoneAltSVG</SVGName>
        <PhoneAltSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>PlaySVG</SVGName>
        <PlaySVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>PlusSVG</SVGName>
        <PlusSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>SearchSVG</SVGName>
        <SearchSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>SnapchatSVG</SVGName>
        <SnapchatSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>StarSVG</SVGName>
        <StarSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>TwitterSVG</SVGName>
        <TwitterSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>UserSVG</SVGName>
        <UserSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>VimeoSVG</SVGName>
        <VimeoSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>WorldSVG</SVGName>
        <WorldSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>YouTubeSVG</SVGName>
        <YouTubeSVG />
      </SVGWrapper>
    </StoryWrapper>
  ))
  .add("icons (Other)", () => (
    <StoryWrapper>
      <SVGWrapper>
        <SVGName>CalendarSVG</SVGName>
        <CalendarSVG
          css={`
            stroke: ${svgColor};
          `}
        />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>CheckMarkSVG</SVGName>
        <CheckMarkSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>DraggableSVG</SVGName>
        <DraggableSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ErrorSVG</SVGName>
        <ErrorSVG />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>FilterSVG</SVGName>
        <FilterSVG
          css={`
            stroke: ${svgColor};
          `}
        />
      </SVGWrapper>
      <SVGWrapper>
        <SVGName>ListSearchSVG</SVGName>
        <ListSearchSVG />
      </SVGWrapper>
    </StoryWrapper>
  ));

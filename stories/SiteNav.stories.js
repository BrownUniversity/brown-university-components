/* eslint-disable react/prop-types */
import React from "react";
import { breakpoints } from "brown-university-styles";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";
import { SiteNav, Banner } from "../src";
import bannerDefaultImage from "./images/banner-default.png";
import bannerSmallImage from "./images/banner-small.png";

const renderBanner = ({ title, ...bannerProps }) => (
  <Banner {...bannerProps}>
    <Banner.Text>{title}</Banner.Text>
  </Banner>
);

const renderSiteNav = (props) => (
  <SiteNav
    {...props}
    mobileToggleTitle={text("mobileToggleTitle", "Site Navigation")}
  >
    <SiteNav.Item>
      <SiteNav.Link>Link</SiteNav.Link>
    </SiteNav.Item>
    <SiteNav.Item>
      <SiteNav.Link active>Active Link</SiteNav.Link>
    </SiteNav.Item>
    <SiteNav.Item>
      <SiteNav.Link disabled>Disabled Link</SiteNav.Link>
    </SiteNav.Item>
  </SiteNav>
);

export default {
  title: "SiteNav",
  decorators: [withKnobs],
};

export const Default = () => renderSiteNav();

Default.story = {
  name: "default",
};

export const WithDefaultBanner = () => {
  const mobileBreakpoint = number("mobileBreakpoint", breakpoints.md);
  return (
    <>
      {renderBanner({
        src: bannerDefaultImage,
        size: "default",
        title: "University Theme",
        mobileBreakpoint,
      })}
      {renderSiteNav({
        banner: boolean("banner", true),
        mobileBreakpoint,
      })}
    </>
  );
};

WithDefaultBanner.story = {
  name: "with default banner",
};

export const WithSmallBanner = () => {
  const mobileBreakpoint = number("mobileBreakpoint", breakpoints.lg);
  return (
    <>
      {renderBanner({
        src: bannerSmallImage,
        size: "small",
        title: "Today@Brown",
        mobileBreakpoint,
      })}
      {renderSiteNav({
        banner: boolean("banner", true),
        mobileBreakpoint,
      })}
    </>
  );
};

WithSmallBanner.story = {
  name: "with small banner",
};

import React from "react";
import { breakpoints } from "brown-university-styles";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";
import { SiteNav, Banner } from "../src";
import bannerDefaultImage from "./images/banner-default.png";
import bannerSmallImage from "./images/banner-small.png";

const getCommonProps = () => ({
  mobileToggleTitle: text("mobileToggleTitle", "Site Navigation")
});

const renderSiteNav = additionalProps => (
  <SiteNav {...getCommonProps()} {...additionalProps}>
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

storiesOf("SiteNav", module)
  .addDecorator(withKnobs)
  .add("default", () => renderSiteNav())
  .add("with default banner", () => (
    <>
      <Banner src={bannerDefaultImage} size="medium">
        <Banner.Text>University Theme</Banner.Text>
      </Banner>
      {renderSiteNav({
        banner: boolean("banner", true),
        mobileBreakpoint: number("mobileBreakpoint", breakpoints.md)
      })}
    </>
  ))
  .add("with small banner", () => (
    <>
      <Banner src={bannerSmallImage} size="small" mobile="true">
        <Banner.Text>Today@Brown</Banner.Text>
      </Banner>
      {renderSiteNav({
        banner: boolean("banner", true),
        mobileBreakpoint: number("mobileBreakpoint", breakpoints.lg)
      })}
    </>
  ));

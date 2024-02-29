import React from "react";
import { breakpoints } from "brown-university-styles";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import { Banner } from "../src";
import bannerDefaultImage from "./images/banner-default.png";

const getColorProp = () =>
  select("color", [
    "emerald",
    "red",
    "brown",
    "yellow",
    "gray",
    "sand",
    "lightBrown",
    "mediumBrown",
    "navy",
    "skyBlue",
  ]);

const getSizeProp = () =>
  select("size", ["default", "small", "medium", "large"]);

const getMobileBreakpointProp = () =>
  number("mobileBreakpoint", breakpoints.md);

export default {
  title: "Banner",
  decorators: [withKnobs],
};

export const Default = () => (
  <Banner color={getColorProp()} size={getSizeProp()} />
);

Default.story = {
  name: "default",
};

export const WithSrc = () => (
  <Banner size={getSizeProp()} src={bannerDefaultImage} />
);

WithSrc.story = {
  name: "with src",
};

export const WithChildren = () => (
  <Banner
    color={getColorProp()}
    size={getSizeProp()}
    mobileBreakpoint={getMobileBreakpointProp()}
  >
    <Banner.Text>University Theme</Banner.Text>
  </Banner>
);

WithChildren.story = {
  name: "with children",
};

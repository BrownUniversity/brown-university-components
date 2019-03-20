import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Banner } from "../src";
import bannerImage from "./images/banner.png";
import todayImage from "./images/today-at-brown-admin.png";

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
    "skyBlue"
  ]);

const getSizeProp = () =>
  select("size", ["default", "small", "medium", "large"]);

storiesOf("Banner", module)
  .addDecorator(withKnobs)
  .add("default", () => <Banner color={getColorProp()} size={getSizeProp()} />)
  .add("with src", () => <Banner size={getSizeProp()} src={bannerImage} />)
  .add("with children", () => (
    <Banner color={getColorProp()} size={getSizeProp()}>
      <Banner.Text>University Theme</Banner.Text>
    </Banner>
  ))
  .add("Today@Brown Admin", () => (
    <Banner size="small" src={todayImage} style={{ border: "1px solid red" }}>
      <Banner.Text>Today@Brown</Banner.Text>
    </Banner>
  ));

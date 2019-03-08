import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Banner } from "../src";
import bannerImage from "./images/banner.png";

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
    "skyblue"
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
  ));

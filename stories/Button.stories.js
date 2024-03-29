import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";

const getCommonProps = () => ({
  color: select("color", [
    "red",
    "yellow",
    "brown",
    "gray",
    "emerald",
    "skyBlue",
    "navy",
    "idRed",
  ]),
  size: select("size", ["default", "small", "large"]),
  uppercase: boolean("uppercase", true),
  rounded: boolean("rounded", false),
  outline: boolean("outline", false),
  inverse: boolean("inverse", false),
  disabled: boolean("disabled", false),
});

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const Default = () => (
  <Button {...getCommonProps()} onClick={action("clicked")}>
    Button
  </Button>
);

Default.story = {
  name: "default",
};

export const WithHref = () => (
  <Button href={text("href", "https://www.brown.edu/")} {...getCommonProps()}>
    Button
  </Button>
);

WithHref.story = {
  name: "with href",
};

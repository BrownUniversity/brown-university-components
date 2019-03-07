import React from "react";
import { storiesOf } from "@storybook/react";
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
    "skyblue",
    "navy"
  ]),
  size: select("size", ["default", "small", "large"]),
  uppercase: boolean("uppercase", true),
  rounded: boolean("rounded", false),
  outline: boolean("outline", false),
  inverse: boolean("inverse", false),
  disabled: boolean("disabled", false)
});

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button {...getCommonProps()} onClick={action("clicked")}>
      Button
    </Button>
  ))
  .add("with href", () => (
    <Button href={text("href", "https://www.brown.edu/")} {...getCommonProps()}>
      Button
    </Button>
  ));

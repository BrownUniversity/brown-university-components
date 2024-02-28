import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Hamburger } from "../src";

const getColorProp = () => select("color", ["red", "white"]);

export default {
  title: "Hamburger",
  decorators: [withKnobs],
};

export const AsButton = () => (
  <Hamburger
    color={getColorProp()}
    ariaLabel={text("ariaLabel", "Toggle navigation")}
    onOpen={action("open")}
    onClose={action("close")}
  />
);

AsButton.story = {
  name: "as button",
};

export const AsDiv = () => (
  <Hamburger
    tag="div"
    color={getColorProp()}
    isOpen={boolean("isOpen", false)}
  />
);

AsDiv.story = {
  name: "as div",
};

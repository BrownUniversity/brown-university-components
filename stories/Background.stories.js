import React from "react";
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import { Background } from "../src";
import backgroundURL from "../src/assets/svg/background.svg";

export default {
  title: "Background",
  decorators: [withKnobs],
};

export const Default = () => (
  <Background
    url={backgroundURL}
    color={select("color", ["white", "lightGray"])}
    full={boolean("full", true)}
    marginTop={number("marginTop", 0)}
  >
    <div style={{ height: "3000px" }} />
  </Background>
);

Default.story = {
  name: "default",
};

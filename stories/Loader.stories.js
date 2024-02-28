import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Loader } from "../src";

export default {
  title: "Loader",
  decorators: [withKnobs],
};

export const Default = () => <Loader height={number("height", 250)} />;

Default.story = {
  name: "default",
};

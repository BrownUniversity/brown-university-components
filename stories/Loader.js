import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Loader } from "../src";

storiesOf("Loader", module)
  .addDecorator(withKnobs)
  .add("default", () => <Loader height={number("height", 250)} />);

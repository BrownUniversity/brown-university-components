import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Hamburger } from "../src";

const getColorProp = () => select("color", ["red", "white"]);

storiesOf("Hamburger", module)
  .addDecorator(withKnobs)
  .add("as button", () => (
    <Hamburger
      color={getColorProp()}
      ariaLabel={text("ariaLabel", "Toggle navigation")}
      onOpen={action("open")}
      onClose={action("close")}
    />
  ))
  .add("as div", () => (
    <Hamburger
      tag="div"
      color={getColorProp()}
      isOpen={boolean("isOpen", false)}
    />
  ));

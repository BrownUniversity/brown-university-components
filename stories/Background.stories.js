import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs";
import { Background } from "../src";
import backgroundURL from "../src/svg/background.svg";

storiesOf("Background", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Background
      url={backgroundURL}
      color={select("color", ["white", "lightGray"])}
      full={boolean("full", true)}
      marginTop={number("marginTop", 0)}
    >
      <div style={{ height: "3000px" }} />
    </Background>
  ));

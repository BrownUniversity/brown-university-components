import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number, text } from "@storybook/addon-knobs";

import { Navbar } from "../src";
import breakpoints from "../src/constants/breakpoints";

const getColorProp = () => select("color", ["brown", "white"]);
const getMobileBreakpointProp = () =>
  number("mobileBreakpoint", breakpoints.md);

storiesOf("Navbar", module)
  .addDecorator(withKnobs)
  .add("default", () => <Navbar color={getColorProp()} />)
  .add("with Nav", () => (
    <Navbar color={getColorProp()} mobileBreakpoint={getMobileBreakpointProp()}>
      <Navbar.Nav>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link active>Active Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link>Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
        <Navbar.Nav.Item>
          <Navbar.Nav.Link disabled>Disabled Link</Navbar.Nav.Link>
        </Navbar.Nav.Item>
      </Navbar.Nav>
    </Navbar>
  ))
  .add("with GlobalNav", () => (
    <Navbar
      color={getColorProp()}
      mobileBreakpoint={getMobileBreakpointProp()}
      toggleTitle={text("toggleTitle", "Global Navigation")}
    >
      <Navbar.GlobalNav>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link active>Active Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link>Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
        <Navbar.GlobalNav.Item>
          <Navbar.GlobalNav.Link disabled>Disabled Link</Navbar.GlobalNav.Link>
        </Navbar.GlobalNav.Item>
      </Navbar.GlobalNav>
    </Navbar>
  ));

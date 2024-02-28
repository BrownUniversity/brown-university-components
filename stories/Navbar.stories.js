import React from "react";
import { breakpoints } from "brown-university-styles";
import { withKnobs, select, number, text } from "@storybook/addon-knobs";
import { Navbar } from "../src";

const getColorProp = () => select("color", ["brown", "white"]);
const getMobileBreakpointProp = () =>
  number("mobileBreakpoint", breakpoints.md);

export default {
  title: "Navbar",
  decorators: [withKnobs],
};

export const Default = () => <Navbar color={getColorProp()} />;

Default.story = {
  name: "default",
};

export const WithNav = () => (
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
);

WithNav.story = {
  name: "with Nav",
};

export const WithGlobalNav = () => (
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
);

WithGlobalNav.story = {
  name: "with GlobalNav",
};

import React from "react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Nav } from "../src";

const getCommonProps = () => ({
  navbar: boolean("navbar", false),
  mobile: boolean("mobile", false),
  sub: boolean("sub", false),
  color: select("color", ["red", "white"]),
});

export default {
  title: "Nav",
  decorators: [withKnobs],
};

export const Default = () => (
  <Nav {...getCommonProps()}>
    <Nav.Item>
      <Nav.Link onClick={action("clicked")}>Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link active onClick={action("clicked")}>
        Active Link
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link disabled onClick={action("clicked")}>
        Disabled Link
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

Default.story = {
  name: "default",
};

export const WithHrefs = () => (
  <Nav {...getCommonProps()}>
    <Nav.Item>
      <Nav.Link href="https://www.brown.edu/">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#" active>
        Active Link
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="https://www.brown.edu/" disabled>
        Disabled Link
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

WithHrefs.story = {
  name: "with hrefs",
};

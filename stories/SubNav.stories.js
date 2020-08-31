import React from "react";
import { storiesOf } from "@storybook/react";
import { SubNav } from "../src";

storiesOf("SubNav", module).add("default", () => (
  <SubNav>
    <SubNav.Item>
      <SubNav.Link>Link</SubNav.Link>
    </SubNav.Item>
    <SubNav.Item>
      <SubNav.Link active>Active Link</SubNav.Link>
    </SubNav.Item>
    <SubNav.Item>
      <SubNav.Link disabled>Disabled Link</SubNav.Link>
    </SubNav.Item>
  </SubNav>
));

import React from "react";
import { SubNav } from "../src";

export default {
  title: "SubNav",
};

export const Default = () => (
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
);

Default.story = {
  name: "default",
};

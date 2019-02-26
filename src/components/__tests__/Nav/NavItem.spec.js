import React from "react";
import { render } from "react-testing-library";

import NavContext from "../../Nav/NavContext";
import NavItem from "../../Nav/NavItem";

const renderNavItem = ({
  context = {},
  props = {},
  children = <span />
} = {}) => {
  const { mobile = false, sub = false } = context;
  const rtlUtils = render(
    <NavContext.Provider value={{ mobile, sub }}>
      <ul>
        <NavItem {...props}>{children}</NavItem>
      </ul>
    </NavContext.Provider>
  );

  return {
    navItem: rtlUtils.container.firstChild.firstChild,
    ...rtlUtils
  };
};

describe("NavItem", () => {
  describe("children", () => {
    it("should render children", () => {
      const children = <span data-testid="nav-item-children" />;
      const { getByTestId } = renderNavItem({ children });

      expect(getByTestId("nav-item-children")).toBeInTheDocument();
    });
  });

  describe("styles", () => {
    it("should render nav item with default styles", () => {
      const { navItem } = renderNavItem();

      expect(navItem).toMatchInlineSnapshot(`
.c0 {
  display: list-item;
  padding: 9px 15px;
}

<li
  class="c0"
>
  <span />
</li>
`);
    });

    it("should render nav item with mobile styles when variant is provided", () => {
      const { navItem } = renderNavItem({ context: { mobile: true } });

      expect(navItem).toHaveStyleRule("border-top", "0.5px solid #C8C8C880");
      expect(navItem).toHaveStyleRule("padding", "1rem 0");
    });

    it("should render nav item with sub styles when variant is provided", () => {
      const { navItem } = renderNavItem({ context: { sub: true } });

      expect(navItem).not.toHaveStyleRule("border-top");
      expect(navItem).toHaveStyleRule("padding", "8px 0 8px 0");
    });
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Nav from "../../Nav";

const renderNav = ({ props = {}, children = <li /> } = {}) => {
  const rtlUtils = render(<Nav {...props}>{children}</Nav>);

  return {
    nav: rtlUtils.container.firstChild,
    ...rtlUtils,
  };
};

describe("Nav", () => {
  describe("children", () => {
    it("should render children", () => {
      const children = (
        <span data-testid="nav-children">
          <li>Foo</li>
          <li>Bar</li>
          <li>Baz</li>
        </span>
      );
      const { getByTestId } = renderNav({ children });

      expect(getByTestId("nav-children")).toBeInTheDocument();
    });
  });

  describe("styles", () => {
    it("should render nav with default styles", () => {
      const { nav } = renderNav();

      expect(nav).toMatchInlineSnapshot(`
.c0 {
  list-style: none;
  margin: 0;
  background-color: transparent;
  display: flex;
  padding: 0;
  width: auto;
}

<ul
  class="c0"
>
  <li />
</ul>
`);
    });

    it("should render nav with mobile styles when variant is provided", () => {
      const { nav } = renderNav({
        props: { mobile: true },
      });

      expect(nav).toMatchInlineSnapshot(`
.c0 {
  list-style: none;
  margin: 0;
  background-color: transparent;
  display: block;
  padding: 0;
  width: 100%;
}

<ul
  class="c0"
>
  <li />
</ul>
`);
    });

    it("should render nav with sub styles when variant is provided", () => {
      const { nav } = renderNav({ props: { sub: true } });

      expect(nav).toMatchInlineSnapshot(`
.c0 {
  list-style: none;
  margin: 0;
  background-color: #f7f7f7;
  display: block;
  padding: 15px;
  width: 100%;
}

<ul
  class="c0"
>
  <li />
</ul>
`);
    });
  });
});

import React from "react";
import { render } from "@testing-library/react";
import Code from "../Code";

const renderCode = ({ props = {}, children = "code" } = {}) => {
  const rtlUtils = render(<Code {...props}>{children}</Code>);

  return {
    code: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe("Code", () => {
  describe("children", () => {
    it("should render children", () => {
      const { getByText } = renderCode({ children: "lorem ipsum dolor" });

      expect(getByText("lorem ipsum dolor")).toBeInTheDocument();
    });
  });

  describe("styles", () => {
    it("should render default", () => {
      const { code } = renderCode();

      expect(code).toMatchInlineSnapshot(`
.c0 {
  background: #F0F3F5;
  color: #000000;
  border: 0.5px solid #dfe3e6;
  border-radius: 3px;
  font-family: "Bitstream Vera Sans Mono",Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 0.65em;
  padding: 0.5em 0.75em;
  white-space: pre-wrap;
}

<code
  class="c0"
>
  code
</code>
`);
    });
  });
});

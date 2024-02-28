import React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";

const renderFooter = ({ props = {} } = {}) => {
  const rtlUtils = render(<Footer {...props} />);

  return {
    footer: rtlUtils.container.firstChild,
    ...rtlUtils,
  };
};

describe("Footer", () => {
  it("should render default", () => {
    const { footer } = renderFooter();

    expect(footer).toMatchSnapshot();
  });
});

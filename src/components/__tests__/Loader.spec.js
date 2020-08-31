import React from "react";
import { render } from "@testing-library/react";
import Loader from "../Loader";

const renderLoader = ({ props = {} } = {}) => {
  const rtlUtils = render(<Loader {...props} />);

  return {
    loader: rtlUtils.container.firstChild,
    ...rtlUtils
  };
};

describe("Loader", () => {
  it("should render loader with default height", () => {
    const { loader } = renderLoader(/* { props: { height: 400 } } */);

    // TODO: update when animation name can be deterministic (see `jest-styled-components` issue 123)
    expect(loader).toMatchInlineSnapshot(`
.c0 svg #rays {
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transform-box: fill-box;
  -ms-transform-box: fill-box;
  transform-box: fill-box;
  -webkit-animation: cZxgpV 7s linear infinite;
  animation: cZxgpV 7s linear infinite;
}

<div
  class="c0"
>
  <div
    data-testid="mock-svg"
    height="250"
    width="192"
  />
</div>
`);
  });

  it("should render loader with custom height when provided", () => {
    const { getByTestId } = renderLoader({ props: { height: 400 } });

    expect(getByTestId("mock-svg")).toHaveAttribute("height", "400");
  });
});

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Collapse from "../../utils/Collapse";

const renderCollapse = ({ props = {}, children = <div /> } = {}) => {
  const { isOpen = false, ...restProps } = props;
  const rtlUtils = render(
    <Collapse {...restProps} isOpen={isOpen}>
      {children}
    </Collapse>,
  );

  return {
    collapse: rtlUtils.container.firstChild,
    ...rtlUtils,
  };
};

afterEach(() => {
  process.NODE_ENV = undefined;
});

describe("Collapse", () => {
  describe("children", () => {
    it("should render children", () => {
      const children = <div data-testid="collapse-children" />;
      const { getByTestId } = renderCollapse({ children });

      expect(getByTestId("collapse-children")).toBeInTheDocument();
    });
  });

  describe("style", () => {
    it("should render closed collapse when isOpen variant is provided", () => {
      const { collapse } = renderCollapse();

      expect(collapse).toMatchInlineSnapshot(`
.c0 {
  will-change: height;
  display: none;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 250ms cubic-bezier(0.4,0,0.2,1);
  transition: height 250ms cubic-bezier(0.4,0,0.2,1);
}

<div
  class="c0"
  display="none"
  height="0"
  overflow="hidden"
>
  <div />
</div>
`);
    });

    it("should render opened collapse when isOpen variant is provided", () => {
      const { collapse } = renderCollapse({ props: { isOpen: true } });

      expect(collapse).toMatchInlineSnapshot(`
.c0 {
  will-change: height;
  display: block;
  height: auto;
  overflow: visible;
  -webkit-transition: height 250ms cubic-bezier(0.4,0,0.2,1);
  transition: height 250ms cubic-bezier(0.4,0,0.2,1);
}

<div
  class="c0"
  display="block"
  height="auto"
  overflow="visible"
>
  <div />
</div>
`);
    });

    it("should render custom transition when provided", () => {
      const transition = "height 5ms cubic-bezier(0.4,0,0.2,1)";
      const { collapse } = renderCollapse({ props: { transition } });

      expect(collapse).toHaveStyleRule("transition", transition);
    });
  });

  /*
    for the following tests, the `e.propertyName` check is being overridden by
    way of a `process.NODE_ENV` check in order to validate that `handleTransitionEnd`
    is called because you can't create a `TransitionEvent` with a `propertyName`.
    see:

    https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
    https://github.com/kentcdodds/dom-testing-library/issues/144
  */

  it("should transition from closed to open", async () => {
    process.NODE_ENV = "jest";
    const { collapse, rerender } = renderCollapse();

    expect(collapse).toHaveStyleRule("display", "none");

    rerender(
      <Collapse isOpen>
        <div />
      </Collapse>,
    );
    fireEvent.transitionEnd(collapse);

    await waitFor(() => expect(collapse).toHaveStyleRule("height", "auto"));
    expect(collapse).toHaveStyleRule("overflow", "visible");
    expect(collapse).toHaveStyleRule("display", "block");
  });

  it("should transition from open to closed", async () => {
    process.NODE_ENV = "jest";
    const { collapse, rerender } = renderCollapse({
      props: { isOpen: true },
    });

    expect(collapse).toHaveStyleRule("display", "block");

    rerender(
      <Collapse isOpen={false}>
        <div />
      </Collapse>,
    );
    fireEvent.transitionEnd(collapse);

    await waitFor(() => expect(collapse).toHaveStyleRule("display", "none"));
    expect(collapse).toHaveStyleRule("height", "0");
    expect(collapse).toHaveStyleRule("overflow", "hidden");
  });
});

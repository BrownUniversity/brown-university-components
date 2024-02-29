import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Hamburger from "../Hamburger";

const renderHamburger = ({ props = {} } = {}) => {
  const rtlUtils = render(<Hamburger {...props} />);
  const hamburger = rtlUtils.container.firstChild;

  return {
    hamburger,
    hamburgerBars: hamburger.firstChild,
    ...rtlUtils,
  };
};

describe("Hamburger", () => {
  describe("as button", () => {
    describe("styles", () => {
      it("should render closed red button element by default", () => {
        const { hamburger } = renderHamburger();

        expect(hamburger).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
}

.c1 {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .22s;
  transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
}

.c1.c1:before {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: "";
  display: block;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition: top 0.1s 0.25s ease-in,opacity 0.1s ease-in;
  top: -7px;
}

.c1.c1:after {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: "";
  display: block;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition: bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
  bottom: -7px;
}

<button
  aria-expanded="false"
  aria-label="Toggle navigation"
  class="c0"
  type="button"
>
  <span
    class="c1"
  />
</button>
`);
      });

      it("should render open red button element when variant is provided", () => {
        const { hamburger } = renderHamburger({
          props: { isOpen: true },
        });

        expect(hamburger).toMatchInlineSnapshot(`
.c0 {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
}

.c1 {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .22s;
  transition-timing-function: cubic-bezier(0.55,0.055,0.675,0.19);
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
  -webkit-transition-delay: 0.12s;
  -o-transition-delay: 0.12s;
  transition-delay: 0.12s;
  -webkit-transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  -o-transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
}

.c1.c1:before {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: "";
  display: block;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition: top 0.1s 0.25s ease-in,opacity 0.1s ease-in;
  opacity: 0;
  top: 0;
  -webkit-transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
  -o-transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
  transition: top 0.1s ease-out,opacity 0.1s 0.12s ease-out;
}

.c1.c1:after {
  height: 3px;
  position: absolute;
  width: 25px;
  background-color: #C00404;
  content: "";
  display: block;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition: bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
  bottom: 0;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);
}

<button
  aria-expanded="true"
  aria-label="Toggle navigation"
  class="c0"
  type="button"
>
  <span
    class="c1"
  />
</button>
`);
      });

      it("should render closed white button element when variant is provided", () => {
        const { hamburgerBars } = renderHamburger({
          props: { color: "white" },
        });

        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF");
        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF", {
          modifier: "&&:before",
        });
        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF", {
          modifier: "&&:after",
        });
      });

      it("should render open white button element when variant is provided", () => {
        const { hamburgerBars } = renderHamburger({
          props: { color: "white", isOpen: true },
        });

        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF");
        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF", {
          modifier: "&&:before",
        });
        expect(hamburgerBars).toHaveStyleRule("background-color", "#FFFFFF", {
          modifier: "&&:after",
        });
      });
    });

    describe("onClick", () => {
      it("should call onOpen when hamburger is opened", () => {
        const onOpen = jest.fn();
        const onClose = jest.fn();
        const { hamburger } = renderHamburger({
          props: { onOpen, onClose },
        });

        fireEvent.click(hamburger);
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
      });

      it("should call onClose when hamburger is closed", () => {
        const onOpen = jest.fn();
        const onClose = jest.fn();
        const { hamburger } = renderHamburger({
          props: { isOpen: true, onOpen, onClose },
        });

        fireEvent.click(hamburger);
        expect(onOpen).not.toHaveBeenCalled();
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    it("should render custom aria-label when provided", () => {
      const { hamburger } = renderHamburger({
        props: { ariaLabel: "Custom label" },
      });

      expect(hamburger).toHaveAttribute("aria-label", "Custom label");
    });

    it("should update when isOpen prop changes", () => {
      const { hamburger, rerender } = renderHamburger();

      expect(hamburger).toHaveAttribute("aria-expanded", "false");

      rerender(<Hamburger isOpen onOpen={jest.fn()} onClose={jest.fn()} />);

      expect(hamburger).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("as div", () => {
    it("should render without button attributes", () => {
      const { hamburger } = renderHamburger({ props: { tag: "div" } });

      expect(hamburger).not.toHaveAttribute("type");
      expect(hamburger).not.toHaveAttribute("aria-expanded");
      expect(hamburger).not.toHaveAttribute("aria-label");
    });

    describe("styles", () => {
      it("should render closed with alternate styles", () => {
        const { hamburger } = renderHamburger({ props: { tag: "div" } });

        expect(hamburger).toHaveStyleRule("cursor", "inherit");
        expect(hamburger).not.toHaveStyleRule("height");
        expect(hamburger).toHaveStyleRule("display", "inline-block");
        expect(hamburger).toHaveStyleRule("padding", "0 25px 7px 0");
      });

      it("should render open with alternate styles", () => {
        const { hamburger } = renderHamburger({
          props: { tag: "div", isOpen: true },
        });

        expect(hamburger).toHaveStyleRule("cursor", "inherit");
        expect(hamburger).not.toHaveStyleRule("height");
        expect(hamburger).toHaveStyleRule("display", "inline-block");
        expect(hamburger).toHaveStyleRule("padding", "0 25px 7px 0");
      });
    });
  });
});

import React from "react";
import { breakpoints } from "brown-university-styles";
import { render, fireEvent } from "@testing-library/react";
import { triggerWindowResize, resetWindowSize } from "window-test-utils";
import SiteNav from "../SiteNav";

const renderSiteNav = ({
  props = {},
  children = (
    <React.Fragment>
      <SiteNav.Item>
        <SiteNav.Link>Link</SiteNav.Link>
      </SiteNav.Item>
      <SiteNav.Item>
        <SiteNav.Link active>Active Link</SiteNav.Link>
      </SiteNav.Item>
      <SiteNav.Item>
        <SiteNav.Link disabled>Link</SiteNav.Link>
      </SiteNav.Item>
    </React.Fragment>
  ),
} = {}) => {
  const rtlUtils = render(<SiteNav {...props}>{children}</SiteNav>);

  return {
    siteNav: rtlUtils.container.firstChild,
    ...rtlUtils,
  };
};

describe("SiteNav", () => {
  describe("when window width is above mobileBreakpoint", () => {
    describe("styles", () => {
      describe("when banner variant is not provided", () => {
        it("should render default site nav", () => {
          const { siteNav } = renderSiteNav();

          expect(siteNav).toMatchSnapshot();
        });
      });

      describe("when banner variant is provided", () => {
        it("should render default site nav with banner positioning", () => {
          const { siteNav } = renderSiteNav({ props: { banner: true } });

          expect(siteNav).toMatchSnapshot();
        });
      });
    });
  });

  describe("when window width is below mobileBreakpoint", () => {
    beforeEach(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    afterAll(() => {
      resetWindowSize();
    });

    describe("styles", () => {
      describe("when banner variant is not provided", () => {
        it("should render mobile site nav", () => {
          const { siteNav } = renderSiteNav();

          expect(siteNav).toMatchSnapshot();
        });
      });

      describe("when banner variant is provided", () => {
        it("should render mobile site nav with banner positioning", () => {
          const { siteNav } = renderSiteNav({ props: { banner: true } });

          expect(siteNav).toMatchSnapshot();
        });
      });
    });

    it("should render custom mobile toggle title when provided", () => {
      const { getByText } = renderSiteNav({
        props: { mobileToggleTitle: "Custom Navigation" },
      });

      expect(getByText("Custom Navigation")).toBeInTheDocument();
    });

    it("should toggle site nav mobile collapse", () => {
      const { getByLabelText, getByText } = renderSiteNav();
      const mobileToggleButtonByLabelText = getByLabelText(
        "Toggle site navigation",
      );
      const mobileToggleButtonByText = getByText("Site Navigation");

      expect(mobileToggleButtonByLabelText).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      fireEvent.click(mobileToggleButtonByLabelText);
      expect(mobileToggleButtonByLabelText).toHaveAttribute(
        "aria-expanded",
        "true",
      );
      fireEvent.click(mobileToggleButtonByText);
      expect(mobileToggleButtonByLabelText).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });
  });
});

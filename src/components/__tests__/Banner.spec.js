import React from "react";
import { render } from "@testing-library/react";
import Banner from "../Banner";

const renderBanner = ({ props = {}, children = null } = {}) => {
  const rtlUtils = render(<Banner {...props}>{children}</Banner>);
  const banner = rtlUtils.container.firstChild;

  return {
    banner,
    bannerImageColorWrapper: banner.firstChild,
    bannerImage: banner.firstChild.firstChild,
    bannerSVG: banner.firstChild.firstChild.firstChild,
    bannerChildrenWrapper: banner.children[1],
    ...rtlUtils
  };
};

describe("Banner", () => {
  describe("children", () => {
    it("should render BannerText as child when provided", () => {
      const BannerChild = <Banner.Text>Banner Text</Banner.Text>;
      const { bannerChildrenWrapper } = renderBanner({ children: BannerChild });

      expect(bannerChildrenWrapper).toMatchInlineSnapshot(`
.c1 {
  color: #FFFFFF;
  font-family: minion-pro,"Times New Roman",serif;
  font-size: 1.9em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
}

.c0 {
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 15;
  top: 35%;
}

@media (min-width:768px) {
  .c1 {
    font-size: 2.5em;
  }
}

@media (min-width:768px) {
  .c0 {
    top: 35%;
  }
}

<div
  class="c0"
>
  <div
    class="c1"
  >
    Banner Text
  </div>
</div>
`);
    });
  });

  describe("styles", () => {
    it("should render banner with emerald background by default", () => {
      const { bannerImageColorWrapper } = renderBanner();

      expect(bannerImageColorWrapper).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  overflow: hidden;
  max-height: 200px;
}

<div
  class="c0"
>
  <svg
    display="block"
    viewBox="0 0 2600 600"
  >
    <rect
      aria-hidden="true"
      fill="#00B398"
      focusable="false"
      height="100%"
      width="100%"
    />
  </svg>
</div>
`);
    });

    it("should render banner with background of another color when color variant is provided", () => {
      const { bannerSVG } = renderBanner({ props: { color: "red" } });

      expect(bannerSVG).toHaveAttribute("fill", "#C00404");
    });

    it("should render small banner when size variant is provided", () => {
      const { bannerImageColorWrapper, bannerChildrenWrapper } = renderBanner({
        props: { size: "small" }
      });

      expect(bannerImageColorWrapper).toHaveStyleRule("max-height", "150px");
      expect(bannerChildrenWrapper).toHaveStyleRule("top", "5%");
    });

    it("should render medium banner when size variant is provided", () => {
      const { bannerImageColorWrapper, bannerChildrenWrapper } = renderBanner({
        props: { size: "medium" }
      });

      expect(bannerImageColorWrapper).toHaveStyleRule("max-height", "300px");
      expect(bannerChildrenWrapper).toHaveStyleRule("top", "35%");
    });

    it("should render large banner when size variant is provided", () => {
      const { bannerImageColorWrapper, bannerChildrenWrapper } = renderBanner({
        props: { size: "large" }
      });

      expect(bannerImageColorWrapper).toHaveStyleRule("max-height", "600px");
      expect(bannerChildrenWrapper).toHaveStyleRule("top", "35%");
    });

    it("should render banner with image background when src is provided", () => {
      const { bannerImage } = renderBanner({
        props: { src: "./path/to/img.jpg" }
      });

      expect(bannerImage).toMatchInlineSnapshot(`
.c0 {
  height: auto;
  min-width: 320px;
  max-width: 100%;
  width: 100%;
  display: block;
}

<img
  alt="Banner"
  class="c0"
  src="./path/to/img.jpg"
/>
`);
    });
  });

  describe("a11y", () => {
    it("should have banner role", () => {
      const { banner } = renderBanner();
      expect(banner).toHaveAttribute("role", "banner");
    });
  });
});

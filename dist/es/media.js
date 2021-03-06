import { css } from "styled-components";
import { breakpoints } from "brown-university-styles";
export default {
  sm: function sm() {
    return css(["@media (min-width:", "px){", ";}"], breakpoints.sm, css.apply(void 0, arguments));
  },
  md: function md() {
    return css(["@media (min-width:", "px){", ";}"], breakpoints.md, css.apply(void 0, arguments));
  },
  lg: function lg() {
    return css(["@media (min-width:", "px){", ";}"], breakpoints.lg, css.apply(void 0, arguments));
  },
  xl: function xl() {
    return css(["@media (min-width:", "px){", ";}"], breakpoints.xl, css.apply(void 0, arguments));
  },
  xxl: function xxl() {
    return css(["@media (min-width:", "px){", ";}"], breakpoints.xxl, css.apply(void 0, arguments));
  }
};
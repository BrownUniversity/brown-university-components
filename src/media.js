import { css } from "styled-components";
import { breakpoints } from "brown-university-styles";

export default {
  sm: (...args) => css`
    @media (min-width: ${breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: ${breakpoints.xl}px) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (min-width: ${breakpoints.xxl}px) {
      ${css(...args)};
    }
  `
};

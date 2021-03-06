import { css } from "styled-components";

export const srOnlyCSS = css`
  border: 0;
  clip-path: inset(50%);
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const unstyledLinkCSS = css`
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  line-height: inherit;
  font-variant: inherit;
  font-weight: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

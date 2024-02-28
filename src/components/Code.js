import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";

const { mono } = typography;

/*
  inner Tag component
*/
const Tag = styled.code`
  background: ${colors.lightGray};
  color: ${colors.black};
  border: 0.5px solid #dfe3e6;
  border-radius: 3px;
  font-family: ${mono};
  font-size: 0.65em;
  padding: 0.5em 0.75em;
  white-space: pre-wrap;
`;

/*
  outer Code component
*/
const Code = (props) => <Tag {...props} />;

Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;

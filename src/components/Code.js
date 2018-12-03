import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { mono } from '../constants/typography';

/*
  inner Tag component
*/
const Tag = styled.code`
  background: #f7f7f7;
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
const Code = props => <Tag {...props} />;

Code.propTypes = {
  children: PropTypes.node.isRequired
};

export default Code;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import { mono } from '../constants/typography';
/*
  inner Tag component
*/

var Tag = styled.code.withConfig({
  displayName: "Code__Tag",
  componentId: "sc-4hvy7i-0"
})(["background:", ";color:", ";border:0.5px solid #dfe3e6;border-radius:3px;font-family:", ";font-size:0.65em;padding:0.5em 0.75em;white-space:pre-wrap;"], colors.lightGray, colors.black, mono);
/*
  outer Code component
*/

var Code = function Code(props) {
  return React.createElement(Tag, props);
};

Code.propTypes = {
  children: PropTypes.node.isRequired
};
export default Code;
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 2.5em;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import media from "../../constants/media";
import { serif } from "../../constants/typography";
/*
  inner Tag component
*/

var Tag = styled.div.withConfig({
  displayName: "BannerText__Tag",
  componentId: "si2has-0"
})(["color:", ";font-family:", ";font-size:1.9em;text-shadow:1px 1px 2px rgba(0,0,0,0.4);", ";"], colors.white, serif, media.md(_templateObject()));
/*
  outer BannerText component
*/

var BannerText = function BannerText(props) {
  return React.createElement(Tag, props);
};

BannerText.propTypes = {
  children: PropTypes.string.isRequired
};
export default BannerText;
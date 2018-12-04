import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import colors from '../../constants/colors';
import media from '../../constants/media';
import { serif } from '../../constants/typography';

/*
  inner Tag component
*/
const Tag = styled.div`
  color: ${colors.white};
  font-family: ${serif};
  font-size: 1.9em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  ${media.md`
    font-size: 2.5em;
  `};
`;

/*
  outer BannerText component
*/
const BannerText = props => <Tag {...props} />;

BannerText.propTypes = {
  children: PropTypes.string.isRequired
};

export default BannerText;

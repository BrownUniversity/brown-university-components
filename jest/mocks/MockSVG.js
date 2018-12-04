import PropTypes from 'prop-types';
import React from 'react';

const MockSVG = ({ height }) => <div data-testid="mock-svg" height={height} />;

MockSVG.propTypes = {
  height: PropTypes.number
};

MockSVG.defaultProps = {
  height: null
};

export default MockSVG;

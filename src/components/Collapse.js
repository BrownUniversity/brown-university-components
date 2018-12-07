import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

/*
  inner components
*/
// https://stackoverflow.com/a/8331169
const CollapseOuterWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.11s ease-out;
  ${({ isOpen, maxHeight }) =>
    isOpen &&
    css`
      max-height: ${maxHeight}px;
      transition: max-height 0.22s ease-in;
    `}
`;

// https://stackoverflow.com/a/27829422
const CollapseInnerWrapper = styled.div`
  overflow: auto;
`;

/*
  outer Collapse component
*/
class Collapse extends Component {
  state = {
    maxHeight: null
  };

  innerWrapperRef = React.createRef();

  componentDidMount() {
    // force initial update if `isOpen` prop is set to true
    if (this.props.isOpen) {
      this.forceUpdate();
    }
  }

  componentDidUpdate() {
    // set `maxHeight` state after initial update, at which time `children`
    // from props have rendered
    if (!this.state.maxHeight) {
      const { height } = this.innerWrapperRef.current.getBoundingClientRect();
      const maxHeight = Math.ceil(height);
      this.setState({
        maxHeight
      });
    }
  }

  render() {
    const { isOpen, children, ...restProps } = this.props;
    const { maxHeight } = this.state;

    return (
      <CollapseOuterWrapper
        {...restProps}
        isOpen={isOpen}
        maxHeight={maxHeight}
      >
        <CollapseInnerWrapper ref={this.innerWrapperRef}>
          {children}
        </CollapseInnerWrapper>
      </CollapseOuterWrapper>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Collapse;

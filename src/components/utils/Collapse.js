/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

/*
  inner Tag component
*/
// TODO: filter display, height and overflow props with `ref` usage (see `styled-components` issue 439)
const Tag = styled.div`
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  overflow: ${({ overflow }) => overflow};
`;

/*
  outer Collapse component
*/
class Collapse extends Component {
  state = {
    display: 'none',
    height: '0',
    overflow: 'hidden'
  };

  tagRef = null;

  componentDidMount() {
    if (this.props.isOpen) {
      this.setExpanded();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.setState(
        {
          display: 'block'
        },
        () =>
          this.setState({
            height: `${this.getHeight()}px`
          })
      );
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.setState({ height: `${this.getHeight()}px` }, () =>
        setTimeout(() =>
          this.setState({
            height: '0',
            overflow: 'hidden'
          })
        )
      );
    }
  }

  getHeight = () => this.tagRef.scrollHeight;

  setCollapsed = () => this.setState({ display: 'none' });

  setExpanded = () =>
    this.setState({
      display: 'block',
      height: 'auto',
      overflow: 'visible'
    });

  handleTransitionEnd = e => {
    if (e.target === this.tagRef && e.propertyName === 'height') {
      if (this.props.isOpen) {
        this.setExpanded();
      } else {
        this.setCollapsed();
      }
    }
  };

  render() {
    const { isOpen, children, ...restProps } = this.props;

    return (
      <Tag
        {...restProps}
        {...this.state}
        ref={node => (this.tagRef = node)}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {children}
      </Tag>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Collapse;

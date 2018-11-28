import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import colors from '../styles/colors';

/*
  css mixins
*/
const hamburgerBarCSS = css`
  background-color: ${({ color }) => colors[color]};
  height: 3px;
  position: absolute;
  width: 25px;
`;

const hamburgerBarPseudoElementCSS = css`
  content: '';
  display: block;
`;

const hamburgerTransitionCSS = css`
  transition-property: transform;
  transition-timing-function: ease;
`;

/*
  inner *Tag components
*/
const ButtonTag = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  padding: 0 25px 3px 0;
  width: 30px;
`;

const SpanTag = styled.span`
  ${hamburgerBarCSS}
  ${hamburgerTransitionCSS}
  transition-duration: .22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  ${props =>
    props.isOpen &&
    css`
      -webkit-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
      transform: rotate(225deg);
      -webkit-transition-delay: 0.12s;
      -o-transition-delay: 0.12s;
      transition-delay: 0.12s;
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    `}

  &&:before {
    ${hamburgerBarCSS}
    ${hamburgerBarPseudoElementCSS}
    ${hamburgerTransitionCSS}
    transition-duration: .15s;
    transition: top .1s .25s ease-in, opacity .1s ease-in;
    opacity: ${props => props.isOpen && '0'};
    top: ${props => (props.isOpen ? '0' : '-7px')};

    ${props =>
      props.isOpen &&
      css`
        -webkit-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        -o-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
      `}
  }

  &&:after {
    ${hamburgerBarCSS}
    ${hamburgerBarPseudoElementCSS}
    ${hamburgerTransitionCSS}
    transition-duration: .15s;
    transition: bottom .1s .25s ease-in, transform .22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    bottom: ${props => (props.isOpen ? '0' : '-7px')};

    ${props =>
      props.isOpen &&
      css`
        -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
          -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      `}
  }
`;

/*
  outer Hamburger component
*/
class Hamburger extends Component {
  state = {
    isOpen: this.props.isOpen
  };

  handleClick = () =>
    this.setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => {
        if (this.state.isOpen) {
          this.props.onOpen();
        } else {
          this.props.onClose();
        }
      }
    );

  render() {
    const { color } = this.props;
    const { isOpen } = this.state;

    return (
      <ButtonTag type="button" onClick={this.handleClick}>
        <SpanTag color={color} isOpen={isOpen} />
      </ButtonTag>
    );
  }
}

Hamburger.propTypes = {
  color: PropTypes.oneOf(['red', 'gray', 'black', 'white']),
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

Hamburger.defaultProps = {
  color: 'red',
  isOpen: false,
  onOpen: () => undefined,
  onClose: () => undefined
};

export default Hamburger;

import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
import brownLogo from '../images/brown-logo.png';

// WIP

const DivTag = styled.div`
  background-color: ${colors.brown};
  box-shadow: 0 1px 10px 5px #00000026;
  min-height: 75px;
  padding: 0 1rem;
  position: relative;
  z-index: 20;
`;

const ImgTag = styled.img`
  height: 65px;
  margin-top: 4px;
  width: 131px;
`;

const Navbar = () => (
  <DivTag>
    <ImgTag src={brownLogo} />
  </DivTag>
);

export default Navbar;

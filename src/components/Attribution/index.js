import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../breakpoints';

const Footer = styled.footer`
  position:absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 11px;
  text-align: center;
  line-height: 0.5rem;

  @media ${breakpoints.device.tablet} {
      font-size: 0.5rem;
      line-height: 0.7rem;
  }

  a {
    color: hsl(228, 45%, 44%);
  }
` 

function Atribution() {

//const name = slide.name;

  return(
    <Footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded with &hearts; by <a href="https://github.com/ViniciusLagoGehrke">Vinicius Gehrke</a>.
    </Footer>
  )
}

export default Atribution;
import React from 'react';
import styled from 'styled-components';

import breakpoints from './breakpoints';

import Card from './components/Card';
import Attribution from './components/Attribution';

import tanya from './img/image-tanya.jpg';
import john from './img/image-john.jpg';
import curve from './img/pattern-curve.svg';

const StyledBody = styled.main`
  display: flex;
  flex-flow:column nowrap;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background: url(${curve}) no-repeat;
  background-size: 80%;
  background-position: left bottom;
  
  @media ${breakpoints.device.tablet} {
    background-size: 50%;
  }
`

export default function App() {
  const slides = [
    {
      name: 'tanya',
      perfil: tanya,
      about: '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "',
      fullName: 'Tanya Sinclair',
      profession: 'UX Engineer'
    },
    {
      name: 'john',
      perfil: john,
      about: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
      fullName: 'John Tarkpor',
      profession: 'Junior Front-end Developer'
    }
  ];

  return (
    <>
      <StyledBody>
        <Card slideList={slides} />
        <Attribution />
      </StyledBody>
    </>
  );
}
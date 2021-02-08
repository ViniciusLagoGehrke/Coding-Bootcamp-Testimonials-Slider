import React, { useState } from 'react';
import styled from 'styled-components';

import breakpoints from '../../breakpoints';
import Slider from '../Slider';

import bg from '../../img/pattern-bg.svg';
import quotes from '../../img/pattern-quotes.svg';


const StyledCard = styled.article`
  display: flex;
  flex-flow:column nowrap;
  justify-content: space-between;
  width: 100%;
  height: 88%;
  margin: 0 auto;
  max-width: ${breakpoints.size.tablet};
`

StyledCard.Image = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items:center;
  justify-content:center;
  flex: 0 1 55%;

  background: url(${bg}) no-repeat;
  background-size: 86%;
  background-position: center;
  padding-top: 1.5rem;

  & img{
    width: 254px;
    border-radius: 5px;

    -webkit-box-shadow: 0px 25px 25px -20px rgba(0,0,50,0.25);
    -moz-box-shadow: 0px 25px 25px -20px rgba(0,0,50,0.25);
    box-shadow: 0px 25px 25px -10px rgba(0,0,50,0.25);
  }

  @media ${breakpoints.device.tablet} {
    background-size: 95%;
    & img{
      width: 380px;
    }
  }
  
  @media ${breakpoints.device.desktop} {
    padding-top: 1rem; 
    
    & img{
      width: 540px;
    }
  }
`

StyledCard.Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;

  text-align: center;
  background: var(--BGcolor)  url(${quotes}) no-repeat;
  background-size: 16%;
  background-position: center top;

  & p{
    font-size: 0.55rem;
    font-weight: 300;
    line-height: 1.38;

    padding: 0.8rem 1.2rem 0.55rem;

    @media ${breakpoints.device.tablet} {
      font-size: 1rem;
    }
  }

  & h6{
    font-size: 0.45rem;
    font-weight: 500;
    line-height:0.6rem;
    color: var(--GrayishBlue);
    
    @media ${breakpoints.device.tablet} {
      font-size: 0.75rem;
      line-height:1.1rem;
    }
  }

  & strong{
    font-weight:700;
    color:#000000;
  }
`


function Card({ slideList }) {
  const [index, setIndex] = useState(0);

  const slide = slideList[index] 
  const name = slide.name;
  const perfil = slide.perfil;
  const about = slide.about;
  const fullName = slide.fullName;
  const profession = slide.profession;

  return(
    <StyledCard>
      <StyledCard.Image>
        <img
          className="img"
          src={perfil}
          alt={name + " perfil"}
        />
        <Slider slideList={slideList} index={index} setIndex={setIndex} />
      </StyledCard.Image>
      <StyledCard.Description>
        <p>{about}</p>
        <h6><strong>{fullName}</strong></h6>
        <h6>{profession}</h6>
      </StyledCard.Description>
    </StyledCard>
  )
}

export default Card;
import React, { useState } from 'react';
import styled from 'styled-components';

import breakpoints from '../../breakpoints';
import Slider from '../Slider';

import bg from '../../img/pattern-bg.svg';
import quotes from '../../img/pattern-quotes.svg';

/*
const image = document.getElementsByClassName("img");
const bodyRect = document.body.getBoundingClientRect();
var w = window.innerWidth;
var h = window.innerHeight;
console.log(`innerWidth: ${w}`)
console.log(`innerHeight: ${h}`)
console.log(bodyRect)
console.log(bodyRect.width/2)

left arrow  37
up arrow    38
right arrow 39
down arrow  40

$(document).keyup(function(e) {
   if (e.keycode === 27) {
     closemenu();
    }
    if(e.keycode === 37) {
      // code for showing next slide
        plusSlides(n)
      }
     // same for other keys
   }
*/

const StyledCard = styled.article`
  display: flex;
  flex-flow:column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88%;
  margin: 0 auto;
  max-width: ${breakpoints.size.tablet};

  @media ${breakpoints.device.desktop} {
    position: relative;
    flex-flow:row-reverse;
    height: 100%;
    max-width: 1300px;
  }
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
    transform: rotate(45deg);
    transform-origin: 100vh 50vw;

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
    padding-top: 0;
    background-position: 0% 35%;
    width: 100%;
    height: 100%;
    flex: 1 0 57%;
    
    & img{
      width: 80%;
      max-width: 540px;
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
  }

  & div div{
    display: flex;
    flex-flow: column nowrap;
  }  

  & h6{
    font-size: 0.45rem;
    font-weight: 500;
    line-height:0.6rem;
    color: var(--GrayishBlue);
  }

  & strong{
    font-weight:700;
    color:#000000;
  }

  @media ${breakpoints.device.tablet} {
    & p{
      font-size: 0.75rem;
    }

    & h6{
      font-size: 0.65rem;
      line-height:1.1rem;
    }
  }

  @media ${breakpoints.device.desktop} {
    height:50%;
    flex: 1 1 55%;
    text-align: left;

    background-position: 36% 12%;
    background-size: 20%;

    & > div{
      position:absolute;
      left: 10%;
      width: 45%;
      max-width: 700px;
    }

    & p{
      font-size: 1rem;
      padding: 0 0 1rem;
    }

    & div div{
      flex-flow: row nowrap;
    }
    
    & h6{
      margin-right: 0.5rem;
    }

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
        <div>
          <p>{about}</p>
          <div>
            <h6><strong>{fullName}</strong></h6>
            <h6>{profession}</h6>
          </div>
        </div>
      </StyledCard.Description>
    </StyledCard>
  )
}

export default Card;
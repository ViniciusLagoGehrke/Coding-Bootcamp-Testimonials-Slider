import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../breakpoints';

import prev from '../../img/icon-prev.svg';
import next from '../../img/icon-next.svg';

const SytledSlider = styled.div`
  --BGcolor: #ffffff;
  --btnHeight:1.25rem; 
  --btnWidth:2.5rem;

  @media ${breakpoints.device.tablet} {
    --btnHeight:1.75rem; 
    --btnWidth:3.5rem;
    --arrowSize:0.4rem;
  }

  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    border:0;
  }

  display:flex;
  justify-content:space-between;
  transform: translateY(-50%);

  background-color: var(--BGcolor);
  height:var(--btnHeight);
  width:var(--btnWidth);

  border-radius:calc(var(--btnHeight) - var(--btnHeight)/2);

  -webkit-box-shadow: 0px 25px 25px -20px rgba(0,0,50,0.25);
  -moz-box-shadow: 0px 25px 25px -20px rgba(0,0,50,0.25);
  box-shadow: 0px 25px 25px -10px rgba(0,0,50,0.25);
`

SytledSlider.Button = styled.button`
  --arrowSize:0.3rem;
  height:100%;
  width:50%;

  background: var(--BGcolor) no-repeat;
  background-position: center center;
  background-size: var(--arrowSize);

  & :hover {
    cursor: pointer;
  }

  &:focus{
    outline:#c0c0c0 dashed 1px; /*accessibility*/ 
  }
`

const LeftButton = styled(SytledSlider.Button)`
  border-top-left-radius:calc(var(--btnHeight) - var(--btnHeight)/2);
  border-bottom-left-radius:calc(var(--btnHeight) - var(--btnHeight)/2);
  
  background-image: url(${prev});

  &:active{
  box-shadow: inset -6px 2px 9px #c7c7c7, 
              inset 6px -2px 9px #ffffff;
  }
`

const RightButton = styled(SytledSlider.Button)`
  border-top-right-radius:calc(var(--btnHeight) - var(--btnHeight)/2);
  border-bottom-right-radius:calc(var(--btnHeight) - var(--btnHeight)/2);
  
  background-image: url(${next});

  &:active{
  box-shadow: inset 6px 2px 9px #c7c7c7, 
              inset -6px -2px 9px #ffffff;
  }
`

function Slider({ index, setIndex, slideList }) {

  const slideLeft = () => {
    const nextIndex = index - 1;
    if(nextIndex < 0) {
      setIndex(slideList.length - 1);
    } else {
      setIndex(nextIndex);
    }
  }

  const slideRight = () => {
    setIndex((index + 1) % slideList.length);
  }
  
  return(
    <SytledSlider>
      <LeftButton
        onClick={slideLeft}
        type="button"
      >
      </LeftButton>
      <RightButton
        onClick={slideRight}
        type="button"
      >
      </RightButton>
    </SytledSlider>
  )
}

export default Slider;
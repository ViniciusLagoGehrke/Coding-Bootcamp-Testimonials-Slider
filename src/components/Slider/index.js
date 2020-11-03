import React from 'react';
import './index.css';

function Slider({ index, setIndex, slides }) {

  const slideLeft = () => {
    const nextIndex = index - 1;
    if(nextIndex < 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(nextIndex);
    }
  }

  const slideRight = () => {
    setIndex((index + 1) % slides.length);
  }
  
  return(
    <div className="slider">
      <button
        onClick={slideLeft}
        type="button"
        className="btn left"
      >
      </button>
      <button
        onClick={slideRight}
        type="button"
        className="btn right"
      >
      </button>
    </div>
  )
}

export default Slider;
import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Card from './components/Card';
import Slider from './components/Slider';
import tanya from './img/image-tanya.jpg';
import john from './img/image-john.jpg';

function App() {
  const [index, setIndex] = useState(0);

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
      <div className="body">
        <Card slide={slides[index]} />
        <Slider slides={slides} index={index} setIndex={setIndex} />
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/ViniciusLagoGehrke">Vinicius Gehrke</a>.
      </div>
    </>
  );
}

export default App;

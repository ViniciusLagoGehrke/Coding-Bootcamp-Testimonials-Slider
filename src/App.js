import React from 'react';
import './reset.css';
import './App.css';
import Slider from './components/Slider';
import tanya from './img/image-tanya.jpg';
import john from './img/image-john.jpg';

function App() {
  return (
    <>
      <div className="body">
        <div className="card">
          <div className="hero">
            <img className="img" src={tanya} alt="tanya perfil" />
            <Slider />
          </div>
          <div className="main">
            <p>“ I’ve been interested in coding for a while but never taken the jump, until now. 
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
            excited about the future. ”</p>
            <h6><strong>Tanya Sinclair</strong></h6>
            <h6>UX Engineer</h6>
          </div>
        </div>
        <div className="card">
          <div className="hero">
            <img className="img" src={john} alt="john perfil" />
            <Slider />
          </div>
          <div className="main">
            <p>“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”</p>
            <h6><strong>John Tarkpor</strong></h6>
            <h6>Junior Front-end Developer</h6>
          </div>
        </div>      
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/ViniciusLagoGehrke">Vinicius Gehrke</a>.
      </div>
    </>
  );
}

export default App;

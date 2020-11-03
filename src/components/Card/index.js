import React from 'react';
import './index.css';

function Card({ slide }) {

  const name = slide.name;
  const perfil = slide.perfil;
  const about = slide.about;
  const fullName = slide.fullName;
  const profession = slide.profession;

  return(
    <div className="card">
      <div className="hero">
        <img
          className="img"
          src={perfil}
          alt={name + " perfil"}
        />
      </div>
      <div className="main">
        <p>{about}</p>
        <h6><strong>{fullName}</strong></h6>
        <h6>{profession}</h6>
      </div>
    </div>
  )
}

export default Card;
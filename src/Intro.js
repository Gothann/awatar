import React from 'react';
import './Intro.css';

function Intro({ name, description }) {
  return (
    <div className="intro">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Intro;

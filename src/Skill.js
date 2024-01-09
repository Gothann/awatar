import React from 'react';
import './Skill.css';

function Skill({ name, icon, background }) {
  return (
    <div className="skill" style={{ background }}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Skill;

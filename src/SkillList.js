import React from 'react';
import Skill from './Skill';
import './SkillList.css';

function SkillList() {
  const skills = [
    { name: 'Umiejętność 1', icon: './icon1.png', background: '#ffcc00' },
    { name: 'Umiejętność 2', icon: './icon1.png', background: '#66ccff' },
    // Dodaj więcej umiejętności według potrzeb
  ];

  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} icon={skill.icon} background={skill.background} />
      ))}
    </div>
  );
}

export default SkillList;

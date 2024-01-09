import React from 'react';
import './App.css';
import Avatar from './Avatar';
import Intro from './Intro';
import SkillList from './SkillList';

function App() {
  return (
    <div className="App">
      <Avatar imageUrl="./avatar.jpg" />
      <Intro name="Twoje Imię i Nazwisko" description="Opis." />
      <SkillList />
    </div>
  );
}

export default App;

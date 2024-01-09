import React from 'react';
import './Avatar.css';

function Avatar({ imageUrl }) {
  return (
    <div className="avatar">
      <img src={imageUrl} alt="Avatar" />
    </div>
  );
}

export default Avatar;

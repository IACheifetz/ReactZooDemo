import React from 'react';
import Animal from './AnimalEmoji.js';

export default function AnimalEmojiList(props) {
  return (
    <h1 className="animal-parade">
      {props.animals.map(animal => <Animal key={animal} animal={animal} />)}
    </h1>
  );
}

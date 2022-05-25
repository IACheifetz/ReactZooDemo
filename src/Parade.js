import React, { useState } from 'react';
import CustomButton from './CustomButton';
import AnimalEmojiList from './AnimalEmojiList.js';

export default function Parade() {
  const [parade, setParade] = useState(['fox', 'raccoon']);

  return (
      
    <div className='buttons'>
      <AnimalEmojiList animals={parade} />
      <CustomButton onClick={() => setParade([...parade, 'fox'])}>Fox</CustomButton>
      <CustomButton onClick={() => setParade([...parade, 'raccoon'])}>Raccoon</CustomButton>
      <CustomButton onClick={() => setParade([...parade, 'rat'])}>Rat</CustomButton>
      <CustomButton onClick={() => setParade([...parade, 'orangutan'])}>Orangutan</CustomButton>
    </div>
  );
}

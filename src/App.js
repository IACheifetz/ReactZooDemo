import './App.css';
import React, { useState } from 'react';
import OpenSign from './OpenSign.js';
import AnimalEmojiList from './AnimalEmojiList.js';

function App() {

  const [unicornSize, setUnicornSize] = useState(10); 
  const [lionSize, setLionSize] = useState(10); 
  const [OpenStatus, setOpenStatus] = useState(false);
  const [parade, setParade] = useState(['fox', 'raccoon']);
  

  return (
    <div className="App">
      <div className="fight">
        <div className="animal">
          <p style={{
            fontSize: `${lionSize}px`
          }}>🦁</p>
          <div className='buttons'>
            <button onClick={() => setLionSize(lionSize + 3)}>Lion eats some meat</button>
            <button onClick={() => setUnicornSize(unicornSize - 3)}>Lion bites the Unicorn</button>
          </div>
        </div>
        <div className="animal">
          <p style={{
            fontSize: `${unicornSize}px`
          }}>🦄</p>
          <div className="buttons">
            <button onClick={() => setUnicornSize(unicornSize + 3)}>Unicorn grazes</button>
            <button onClick={() => setLionSize(lionSize - 3)}>Unicorn stabbed the Lion</button>
          </div>
        </div>
      </div>

      <OpenSign isOpen={OpenStatus} />
      <div className="buttons">
        <button onClick={() => setOpenStatus(true)}>open</button>
        <button onClick={() => setOpenStatus(false)}>closed</button>
        {OpenStatus && <h2>The zoo is open!</h2>}
        {!OpenStatus && <h2>Sorry, the zoo is closed</h2>}
      </div>

      <AnimalEmojiList animals={parade} />
      <div className='buttons'>
        <button onClick={() => setParade([...parade, 'fox'])}>Fox</button>
        <button onClick={() => setParade([...parade, 'raccoon'])}>Raccoon</button>
        <button onClick={() => setParade([...parade, 'rat'])}>Rat</button>
        <button onClick={() => setParade([...parade, 'orangutan'])}>Orangutan</button>
      </div>
    </div>
    
  );
}

export default App;

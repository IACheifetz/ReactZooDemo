import './App.css';
import React, { useState } from 'react';
// import OpenSign from './OpenSign.js';
import AnimalEmojiList from './AnimalEmojiList.js';

function App() {

  const [unicornSize, setUnicornSize] = useState(10); 
  const [lionSize, setLionSize] = useState(10); 
  // const [OpenStatus, setOpenStatus] = useState('closed');
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
      {/* <OpenSign isOpen={OpenStatus} />
      <div className="buttons">
        <button onClick={() => setOpenStatus('open')}>We are open</button>
        <button onClick={() => setOpenStatus('closed')}>Sorry, we are closed</button>
      </div> */}
      <AnimalEmojiList animals={parade} />
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button onClick={() => setParade([...parade, 'fox'])}>Fox</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button onClick={() => setParade([...parade, 'raccoon'])}>Raccoon</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button onClick={() => setParade([...parade, 'rat'])}>Rat</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button onClick={() => setParade([...parade, 'orangutan'])}>Orangutan</button>
      </div>
    </div>
    
  );
}

export default App;

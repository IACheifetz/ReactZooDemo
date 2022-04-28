import './App.css';
import React, { useState } from 'react';

function App() {

  const [unicornSize, setUnicornSize] = useState(10); 
  const [lionSize, setLionSize] = useState(10); 
  

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
    </div>
  );
}

export default App;

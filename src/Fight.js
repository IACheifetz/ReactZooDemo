import React, { useState } from 'react';
import CustomButton from './CustomButton';

export default function Fight() {
  const [unicornSize, setUnicornSize] = useState(10); 
  const [lionSize, setLionSize] = useState(10); 
  return (
    

    <div className="fight">
      <div className="animal">
        <p style={{
          fontSize: `${lionSize}px`
        }}>🦁</p>
        <div className='buttons'>
          <CustomButton onClick={() => setLionSize(lionSize + 3)}>Lion eats some meat</CustomButton >
          <CustomButton onClick={() => setUnicornSize(unicornSize - 3)}>Lion bites the Unicorn</CustomButton >
        </div>
      </div>
      <div className="animal">
        <p style={{
          fontSize: `${unicornSize}px`
        }}>🦄</p>
        <div className="buttons">
          <CustomButton onClick={() => setUnicornSize(unicornSize + 3)}>Unicorn grazes</CustomButton >
          <CustomButton onClick={() => setLionSize(lionSize - 3)}>Unicorn stabbed the Lion</CustomButton >
        </div>
      </div>
    </div>
  );
}

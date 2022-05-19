import './App.css';
import React, { useState } from 'react';
import OpenSign from './OpenSign.js';
import Fight from './Fight.js';
import Parade from './Parade.js';
import CustomButton from './CustomButton';

function App() {

  const [OpenStatus, setOpenStatus] = useState(false);
  

  return (
    <div className="App">
      <Fight />

      <OpenSign isOpen={OpenStatus} />
      <div className="buttons">
        <CustomButton onClick={() => setOpenStatus(true)}>open</CustomButton>
        <CustomButton onClick={() => setOpenStatus(false)}>closed</CustomButton>
        {OpenStatus && <h2>The zoo is open!</h2>}
        {!OpenStatus && <h2>Sorry, the zoo is closed</h2>}
      </div>
      <div className='buttons'>
        <Parade />
      </div>
    </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import OpenSign from './OpenSign.js';
import CustomButton from './CustomButton';

export default function ZooOpen() {
  const [OpenStatus, setOpenStatus] = useState(false);
  return (
    <div>
      <OpenSign isOpen={OpenStatus} />
      <div className="buttons">
        <CustomButton onClick={() => setOpenStatus(true)}>open</CustomButton>
        <CustomButton onClick={() => setOpenStatus(false)}>closed</CustomButton>
        {OpenStatus && <h2>The zoo is open!</h2>}
        {!OpenStatus && <h2>Sorry, the zoo is closed</h2>}
      </div>
    </div>
  );
}

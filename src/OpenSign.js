import React from 'react';

export default function OpenSign({ isOpen }) {
  return (
    <div className='open-sign'>
      <div className={`open ${isOpen === true}`}>
      </div>
      <div className={`closed ${isOpen === false}`}>
      </div>
    </div>
  );
}
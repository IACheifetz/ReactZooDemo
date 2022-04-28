import React from 'react';

export default function OpenSign(props) {
  return (
    <div className='open-sign'>
      <div className={`we're open ${props.isOpen === 'on' && 'open'}`}></div>
      <div className={`we're closed ${props.isOpen === 'on' && 'closed'}`}></div>
    </div>
  );
}
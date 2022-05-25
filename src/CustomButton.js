import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <Button onClick={onClick} variant="contained"
      sx={{
        width: 300,
        border: 'solid 2px grey'
      }}  
    > 
      {children}
    </Button>
  );
}
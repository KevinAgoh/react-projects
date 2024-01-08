import React, { useState } from 'react';
import './../Random-colour/styles.css';

const RandomColour = () => {
  const [colour, setColour] = useState('#000000');
  const [colourType, setColourType] = useState('hex');

  const handleHexColourChange = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    const hexColor = '#' + randomColor;
    setColour(hexColor);
    if (colourType !== 'hex') setColourType('hex');
  };

  const handleRGBcolourChange = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const colour = `rgb(${r}, ${g}, ${b})`;
    setColour(colour);
    if (colourType !== 'rbg') setColourType('rgb');
  };

  const handleColourChange = () => {
    if (colourType === 'hex') handleHexColourChange();
    else handleRGBcolourChange();
  };

  console.log(colourType);
  return (
    <div
      style={{
        backgroundColor: colour,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      className='container'
    >
      <div className='button-wrapper'>
        <button onClick={handleColourChange}>Generate random colour</button>
        <button onClick={handleHexColourChange}>Create hex colour</button>
        <button onClick={handleRGBcolourChange}>Create rgb colour</button>
      </div>
      <span className='colour-wrapper'>{colour}</span>
    </div>
  );
};

export default RandomColour;

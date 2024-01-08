import React from 'react';
import './App.css';
import Accordion from 'components/Accordion';
import RandomColour from 'components/Random-colour';

function App() {
  return (
    <div className='App'>
      <Accordion />
      <RandomColour />
    </div>
  );
}

export default App;

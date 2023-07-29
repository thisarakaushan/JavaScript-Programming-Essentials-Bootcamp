import React, { useState } from 'react';
import GreetingCard from './GreetingCard';
import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    //<div className="App">
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <GreetingCard name="John" message="Welcome to our website!" />
        <GreetingCard name="Jane" message="Hope you have a great day!" />
        <button onClick={toggleBackground}>Toggle Background</button>
        <h1>Color Toggle App</h1>
      </header>
   </div>
  );
}


export default App;

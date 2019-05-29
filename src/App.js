import React from 'react';
import logo from './Logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-container">
        <nav className="App-menu"></nav>
      </section>
    </div>
  );
}

export default App;

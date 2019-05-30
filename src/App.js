import React from 'react';
import logo from './Logo.svg';
import './App.scss';
import Menu from './components/menu/Menu';

function App() {
  const items = [{
    state: 'dashboard',
    title: 'Dashboard',
    icon: 'stat',
}, {
    state: 'campaigns',
    title: 'Campaigns',
    icon: 'case',
}, {
    state: 'campaigns',
    title: 'Campaigns',
    icon: 'assistance',
}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-container">
        <Menu items={items}/>
      </section>
    </div>
  );
}

export default App;

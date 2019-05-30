import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './Logo.svg';
import './App.scss';
import Menu from './components/menu/Menu';
import Page from './components/page/Page';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = { items: [] };
    fetch('http://www.mocky.io/v2/5ced03033200005f000c0f2a')
      .then(res => res.text())
      // eslint-disable-next-line
      .then(res => this.setState({ items: eval(res) }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="App-container">
          <Menu items={this.state.items}/>
          <Switch>
            <Route path='/:type' render={props => {
              return <Page data={this.state.items.find(item => item.state === props.match.params.type)}/>
            } }/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;

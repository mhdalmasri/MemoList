import React, {
  Component
} from 'react';
import Logo from './Logo.js';
import Header from './Header.js';
import Memo from './Memo.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
       <div className = "App" >
      <header className = "App-header" >
     <Logo / >
      <Header / >
      <Memo / >
      </header>
      </div>
    );
  }
}
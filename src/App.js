import React from 'react';
import logo from './header.png';
import Dictionary from './Dictionary';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <div className="bottom-container">
        This project was coded by{" "}
        <strong>
          <a href="https://www.linkedin.com/in/margarita-jabola/ ">
            Margarita Jabola
          </a>
        </strong>
        <br />
        This is open-sourced on{" "}
        <a href="https://github.com/mjabola/dictionary-app">GitHub</a> and
        hosted on{" "}
        <a href="https://resplendent-dodol-db0f86.netlify.app/">Netlify</a>
      </div>
    </div>
  );
}

export default App;

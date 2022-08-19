import logo from './header.png';
import Dictionary from './Dictionary';

import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;

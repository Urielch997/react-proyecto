import React from 'react';
import logo from './logo.svg';
import './App.css';


//Mis componentes
import Micomponente from './componets/Micomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            React.
        </p>
        <section className="componente">
          <Micomponente/>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

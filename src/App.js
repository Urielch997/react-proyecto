import React from 'react';
import './App.css';


//Mis componentes
import Micomponente from './componets/Micomponente';
import Tareas from './componets/Tareas';

function App() {
  return (
    <div className="App">
      <Micomponente />
      <Tareas/>
    </div>
  );
}

export default App;

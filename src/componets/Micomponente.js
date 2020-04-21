import React,{Component} from 'react';

class Micomponente extends Component{
  render(){
      let persona={
        Nombre: 'Uriel',
        apellido: 'Hernandez',
        caracteristicas:['18 a?os','peso']
      }

    return(
      <React.Fragment>
      <h1>{persona.Nombre}</h1>
      <h2>Hola soy el segundo componente</h2>
      </React.Fragment>
    );
  }
}

export default Micomponente;

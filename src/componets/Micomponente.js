import React,{Component} from 'react';

class Micomponente extends Component{

    insertarref = React.createRef();
    insertar = (e) => {
        e.preventDefault();
        let tarea = [];
        tarea.push(this.insertarref.current.value);

        let tarea2 = [tarea];

        console.log(tarea2);
    }
  render(){

    return(
      <form onSubmit={this.insertar}>
      <h1>Formulario</h1>
          <input ref={this.insertarref} type="text" placeholder="Nombre" spellCheck='false'/>
          <input type="text" placeholder="Correo"/>
          <input type="submit" />
      </form>
    );
  }
}

export default Micomponente;

import React from 'react';
import {getUsuarios, bloquearUsuario, desbloquearUsuario} from "../../api/api"

class RAdmin extends React.Component {

  async acceder(password){
    if(password=="hola"){
      window.location.href ="http://localhost:3000/administrar";
    }
  }

  render() {
    return (
      <div title="Admin">
        <div className="prueba">
          <h2>Registrate como admin</h2>
            <input type="text" id="password" />
            <button onClick={()=>this.acceder(document.getElementById("password").value)}>Acceder</button>
        </div>
      </div>
    )
  }
}



export default RAdmin;
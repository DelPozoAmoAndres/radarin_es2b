import React from 'react';
import {getUsuarios, bloquearUsuario, desbloquearUsuario} from "../../api/api"

class Admin extends React.Component {

  async listarUsuarios() {
    var list = ""
    var usuarios = await getUsuarios();
    usuarios.forEach((usuario) => {
      list += '<div className="card" ><div><h4 className="peticiones"><p>Usuario: ' + usuario.nombreUsuario + ' <br> WebId: ' +usuario.webid + '</p></h4>' +
        '<center><div className="botones">' +
        '<Button variant="contained" className="buttoncard" name="Desbloquear" id='+usuario.webid+' datatype="button" >Desbloquear</Button>'+
        '<Button variant="contained" className="buttoncard" name="Bloquear" id='+usuario.webid+' datatype="button" >Bloquear</Button>'+
        '</div></center></div></div>' ;
    })
    var lista = document.getElementById("usuarios");
    lista.innerHTML = list;
    console.log(lista);
    if (lista !== "") {
      let elementA = document.getElementsByName('Desbloquear');
      elementA.forEach((element) => element.onclick = ()=> desbloquearUsuario(element.id));
      let elementB = document.getElementsByName('Bloquear');
      elementB.forEach((element) => element.onclick = ()=> bloquearUsuario(element.id));
    }  
  }
  
  render() {
    return (
      <div title="Admin">
        <div className="prueba">
          <h2>Administrar Usuarios</h2>
          <button onClick={()=>this.listarUsuarios()}>Mostrar Usuarios</button>
          <div id="usuarios" className="list" padding-inline-start="0">
          </div>
        </div>
      </div>
    )
  }
}



export default Admin;
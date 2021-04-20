import React from "react";


class PaginaBloqueada extends React.Component {

    render(){
        return (
            <section style={{display:"inline-block"}}>
                <h2>Tu cuenta ha sido bloqueada</h2>
                <h3>Si crees que ha sido un error, ponte en contacto con un administrador</h3>
            </section>
        );
    }

}

export default PaginaBloqueada;
// External dependences
import React from 'react';

// Dependences from: ~/ui/logIn/modules
import "../LogIn.css"

function WebId(props) {
    return (
        <section>
            <p className="webid-title">WebId</p>
            <input className="webid-input" id="webId" type="text">
            </input>
        </section>
    );
}

export default WebId;
// External dependences
import React from 'react';

// Dependences from: ~/ui/logIn/modules
import "../LogIn.css"

function Provider(props) {
    return (
        <div>
            <p className="provider-title">Proveedor</p>
            <select className="provider-select" name="providers" id="providers">
                <option value="https://inrupt.net/common/popup.html"> inrupt.net</option>
                <option value="https://solidcommunity.net/common/popup.html"> solidcommunity.net</option>
            </select>
        </div>
    );
}

export default Provider;
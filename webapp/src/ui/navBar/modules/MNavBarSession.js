// External dependences
import React from "react";
import { useSession, CombinedDataProvider, Text } from "@inrupt/solid-ui-react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { FOAF } from "@inrupt/lit-generated-vocab-common";
import Button from "@material-ui/core/Button";
import { LogoutButton } from "@inrupt/solid-ui-react";
import { LoggedOut, LoggedIn, useWebId } from "@solid/react";
import LoginButton from "../../logIn/modules/LoginButtons.js"

function MNavBarSession() {
    const { session } = useSession();
    const webId  = useWebId();

    //We have logged out


    return (

        <Nav>
                <Nav.Link>
                    <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                        <Text property={FOAF.name.iri.value} autosave />
                    </CombinedDataProvider>
                </Nav.Link>
                <Nav.Link>
                    <LoginButton />
                </Nav.Link>
        </Nav>
    );
}
export default MNavBarSession;


// linea 25 
// <Text property={FOAF.name.iri.value} autosave/> 
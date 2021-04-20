import './LogIn.css';
import React from 'react';
import {Grid } from '@material-ui/core'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LoginButton from "./modules/LoginButtons"

function LogIn(props) {
    return (
        <section style={{display:"inline-block"}}>
            <div style={{paddingTop:"10%"}}>
            <img src="TracingApp-01.jpg" width="400" height="700" alt="logo"/>
            </div>
            <Grid className="container-buttons" container direction="column">
                <LoginButton className="loginButton"/>
            </Grid>
            <a ><Nav.Link as={Link} to="/radmin" >Accede como administrador</Nav.Link></a>
        </section>
    );
}
export default LogIn;
// External dependences
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Friends from "../friends/Friends"
import Admin from "../admin/Admin"

// Dependences from: ~/ui/navBar
import MNavBarSession from "./modules/MNavBarSession";

function MNavBar() {
    return <Navbar bg="white" expand="lg" className="navBar fixed-top align-items center shadow rounded">
        <Navbar.Brand href="/" className="mb-1">Radarin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav animation={"false"} className="mr-auto">
                <Nav.Link as={Link} to="/mapa" >Mapa</Nav.Link>
                <Nav.Link as={Link} to="/perfil" >Perfil</Nav.Link>
                <Nav.Link as={Link} to="/amigos" >Mis amigos</Nav.Link>
                <Nav.Link as={Link} to="/config" >Configuracion</Nav.Link>
                <Nav.Link as={Link} to="/about" >Acerca de</Nav.Link>
            </Nav>
            <MNavBarSession></MNavBarSession>
        </Navbar.Collapse>
    </Navbar>;
}

export default MNavBar;
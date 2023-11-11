import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const AppHeader = () => (
    //cf-camille: NavBar's in bootstrap are fluid by default so I removed the explicit 'fluid' attribute
    <Navbar >
        <Navbar.Brand>
            <Link to="/">Tic-Tac-Toe (Standalone) Camille's Edit</Link>
        </Navbar.Brand>
    </Navbar>
);

export default AppHeader;

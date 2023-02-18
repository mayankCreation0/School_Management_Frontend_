import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem",
    };

    const linkStyles = {
        color: "#fff",
        textDecoration: "none",
        marginRight: "1rem",
    };

    return (
        <nav style={navStyles}>
            <h1>My App</h1>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                    <NavLink to="/adminlogin" style={linkStyles}>
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" style={linkStyles}>
                        Teachers
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

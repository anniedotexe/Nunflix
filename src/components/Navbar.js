import React, { useEffect, useState } from "react";
import "./Navbar.css";


function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }

    }, [])

    return (
        <div className={`navbar ${show && "navbar_black"}`}>

            <h1>NUNFLIX</h1>

            <img
                className="navbar_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Profile Avatar"
            />
        </div>
    )
}

export default Navbar;
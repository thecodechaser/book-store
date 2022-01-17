import React from "react";
import { NavLink } from 'react-router-dom';

const Header  = () => {
    const links = [
        {
            id: 0,
            path: "/",
            text: "BOOKS"
        },
        {
            id: 1,
            path: "/categories",
            text: "CATEGORIES"
        }
    ];


    return (
        <header className="header">
            <h1 className="header-h1">Bookstore CMS</h1>
            <nav>
            <ul className="nav-links">
                {
                    links.map((link) =>(
                        <li key={link.id}>
                            <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
                        </li>
                    ))
                }
                
            </ul>
            </nav>
        </header>
    );
}

export default Header;
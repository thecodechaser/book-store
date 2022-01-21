import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from '@react-icons/all-files/im/ImUser';

const Header = () => {
  const links = [
    {
      id: 0,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 1,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="header">
      <h1 className="header-h1">Bookstore CMS</h1>
      <nav>
        <ul className="nav-links">
          {
                    links.map((link) => (
                      <li key={link.id}>
                        <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
                      </li>
                    ))
                }

        </ul>
      </nav>
      <div className="user-icon-c">
        <ImUser className="user-icon" />
      </div>
    </header>
  );
};

export default Header;

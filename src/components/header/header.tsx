import * as React from 'react';
import { Link } from 'gatsby';
import './header.scss';
import logo from '../../images/Superlive-logo.svg';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <span>
        <i className="header__menu-icon fas fa-bars" />
      </span>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link className="header__menu-link" activeClassName="header__menu-active" to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="header__menu-link"
              activeClassName="header__menu-active"
              to={'/contacts'}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

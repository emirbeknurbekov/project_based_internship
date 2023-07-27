import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Navbar.css";
import Logo from "../../assets/icons/Logo.svg";
import Messages from "../../assets/icons/messages.png";
import Notifications from "../../assets/icons/notification.png";
import User from "../../assets/icons/user.png";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <section id="header">
      <div className="container">
        <div className="header__logo__block">
          <Link className="header__logo__block" to="/">
            <img src={Logo} alt="error(" />
            <p className="logo__descr">DevLink</p>
          </Link>
        </div>
        <div className="header__titles_block">
          <ul className="header__titles">
            <a href="#">
              <li>Project and Ideas</li>
            </a>
            <a href="#">
              <li>Events</li>
            </a>
            <Link to="/portfolio">
              <li>Portfolios</li>
            </Link>
            <a href="#">
              <li>Search</li>
            </a>
          </ul>
        </div>

        {user ? (
          <div className="header__user__block">
            <a href="#">
              <img src={Messages} alt="error" className="header__icons" />
            </a>
            <a href="#">
              <img src={Notifications} alt="error" className="header__icons" />
            </a>
            <div className="header__username">
              <p className="header__username__title">{user.displayName}</p>
              <Link className="header__username__img" to="/profile">
                <img src={User} alt="error" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="sign__block">
            <Link to="/auth">
              <button className="sign__item">
                <a href="#">Sign in</a>
                <span>/</span>
                <a href="#">Sign up</a>
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;

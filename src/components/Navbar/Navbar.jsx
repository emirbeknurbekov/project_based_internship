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
      <div class="container">
        <div class="header__logo__block">
          <a class="header__logo__block" href="#">
            <img src={Logo} alt="error(" />
            <p class="logo__descr">DevLink</p>
          </a>
        </div>
        <div class="header__titles_block">
          <ul class="header__titles">
            <a href="#">
              <li>Project and Ideas</li>
            </a>
            <a href="#">
              <li>Events</li>
            </a>
            <a href="#">
              <li>Portfolios</li>
            </a>
            <a href="#">
              <li>Search</li>
            </a>
          </ul>
        </div>

        {user ? (
          <div class="header__user__block">
            <a href="#">
              <img src={Messages} alt="error" class="header__icons" />
            </a>
            <a href="#">
              <img src={Notifications} alt="error" class="header__icons" />
            </a>
            <div class="header__username">
              <p class="header__username__title">{user.displayName}</p>
              <a class="header__username__img" href="#">
                <img src={User} alt="error" />
              </a>
            </div>
          </div>
        ) : (
          <div class="sign__block">
            <Link to="/auth">
              <button class="sign__item">
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

import React from "react";
import "./UserInfo.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import avatar2 from "../../assets/icons/avatar_2.png";
import like from "../../assets/icons/like.png";
import change from "../../assets/icons/change.png";
import line from "../../assets/icons/line.png";
import settings from "../../assets/icons/settings.png";
const UserInfo = () => {
  const location = useLocation();
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <section id="user">
      <div className="container">
        <div className="user-info__block">
          <h2 className="user-info__title">
            {location.pathname === "/profile" ? "Profile" : "Porfolio"}
          </h2>
          <div className="user-info__block__wrapper">
            <div className="user-info__block_left">
              <img
                src={avatar2}
                alt="error"
                className="user-info__block_left__img"
              />
              <div className="user-info__block_left__item">
                <h2 className="user-info__block_left__username">Username</h2>
                <p className="user-info__block_left__speciality">
                  Fullstack developer
                </p>
                <div className="user-info__block_left__contact__block">
                  <button className="user-info__block_left__contact__block_btn">
                    Resume
                  </button>
                  <button className="user-info__block_left__contact__block_btn">
                    Contact
                  </button>
                </div>
                <a href="#" className="user-info__block_left__email">
                  example@gmail.com
                </a>
                <div className="user-info__block_left__like">
                  <img src={like} alt="error" />
                  <p className="user-info__block_left__like__item">22.2 k</p>
                </div>
              </div>
            </div>
            <div className="user-info__block_right">
              <div className="user-info__block_right__item">
                <p className="user-info__block_right__item__title">Faculty:</p>
                <input
                  type="text"
                  placeholder="ex:COM"
                  className="user-info__block_right__item_input"
                />
              </div>
              <div className="user-info__block_right__item">
                <p className="user-info__block_right__item__title">
                  Speciality:
                </p>
                <input
                  type="text"
                  placeholder="ex:frontend"
                  className="user-info__block_right__item_input"
                />
              </div>
              <div className="user-info__block_right__item">
                <p className="user-info__block_right__item__title">Course:</p>
                <input
                  type="text"
                  placeholder="ex:Bacalavr 1'st year"
                  className="user-info__block_right__item_input"
                />
              </div>
            </div>
            <div className="user__right-items">
              <div className="user__right-items__block">
                <img
                  src={change}
                  alt="error"
                  className="user__right-items__changebtn"
                />
                <img
                  src={line}
                  alt="error"
                  className="user__right-items__line"
                />
                <img
                  src={settings}
                  alt="error"
                  className="user__right-items__settingsbtn"
                />
              </div>
              <h2
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="user__right-items__logout"
              >
                Logout
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;

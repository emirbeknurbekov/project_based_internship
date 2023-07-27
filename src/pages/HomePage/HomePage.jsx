import React from "react";
import "./HomePage.css";
import logoAlatoo from "../../assets/icons/logo-alatoo.png";
import mainPng from "../../assets/img/main_png.png";
import news1 from "../../assets/img/news-1.png";
import news2 from "../../assets/img/news-2.png";
import event3 from "../../assets/img/event-3.png";
import Settings from "../../assets/icons/settings.png";

const HomePage = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="main__block">
          <div className="main__block_left">
            <div className="main__block_left__wrapper">
              <img src={logoAlatoo} alt="error" />
              <h2 className="main__block_left__wrapper_descr">
                Computer Science{" "}
              </h2>
            </div>
            <div className="main__block_left__descr">
              <div className="main__block_left__descr__slogan">
                <p>"Unlock Your Potential in the World of Programming"</p>
              </div>
              <button className="main__block_left__descr__btn">
                Start NOW
              </button>
            </div>
          </div>
          <div className="main__block_right">
            <img src={mainPng} alt="error" />
          </div>
        </div>
        <div className="news__block">
          <div className="card">
            <div className="card__img">
              <img src={news1} alt="error" />
            </div>
            <div className="card__title">
              <p className="card__title__date">24.09.2023</p>
              <p className="crad__title__descr">
                DEV/Pub Matchmaking Meetup with Nordic Game Community <br />
                Do not miss !!!A block 203 16:00
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={news2} alt="error" />
            </div>
            <div className="card__title">
              <p className="card__title__date">24.09.2023</p>
              <p className="crad__title__descr">
                Professor of University Clermon-Overn VISITED MUA
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={event3} alt="error" />
            </div>
            <div className="card__title">
              <p className="card__title__date">15.08.2023</p>
              <p className="crad__title__descr">Open lesson Day</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#">
        <img src={Settings} alt="error" className="settings" />
      </a>
    </section>
  );
};

export default HomePage;

import React from "react";
import "./Footer.css";
import Logo from "../../assets/icons/Logo.svg";
import Facebook from "../../assets/icons/facebook.png";
import Google from "../../assets/icons/google.png";
import Twitter from "../../assets/icons/twitter.png";
import Youtube from "../../assets/icons/youtube.png";
import FooterPng from "../../assets/img/footer_png.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <h2 class="footer__title">Contact Us</h2>
        <div class="footer__block">
          <div class="footer__block_first">
            <div class="footer__logo__block">
              <a href="#" class="footer__logo">
                <img src={Logo} alt="error" />
                <p>DevLink</p>
              </a>
            </div>
            <h2 class="footer__block_first__title">Where you can find US:</h2>
            <div class="footer__block_first_social__block">
              <a href="#" class="footer__block_first_social__item">
                <img src={Facebook} alt="error" />
              </a>
              <a href="#" class="footer__block_first_social__item">
                <img src={Google} alt="error" />
              </a>
              <a href="#" class="footer__block_first_social__item">
                <img src={Twitter} alt="error" />
              </a>
              <a href="#" class="footer__block_first_social__item">
                <img src={Youtube} alt="error" />
              </a>
            </div>
          </div>
          <div class="footer__block_second">
            <p class="footer__block_second__title">Name</p>
            <input
              type="text"
              placeholder="Name"
              class="footer__block_second__input"
            />
            <p class="footer__block_second__title">Email</p>
            <input
              type="text"
              placeholder="@gmail.com"
              class="footer__block_second__input"
            />
            <input
              type="text"
              rows="4"
              col="50"
              placeholder="Type text here..."
              class="footer__block_second__text-input"
            />
          </div>
          <div class="footer__block_third">
            <ul class="footer__block_third__qstns">
              <a href="#">
                <li class="footer__block_third__qstns__item">
                  Why better use our platform?
                </li>
              </a>
              <a href="#">
                <li class="footer__block_third__qstns__item">How it works?</li>
              </a>
            </ul>
            <ul class="footer__block_third__docs">
              <a href="#">
                <li class="footer__block_third__docs__item">Resources</li>
              </a>
              <a href="#">
                <li class="footer__block_third__docs__item">Platform</li>
              </a>
              <a href="#">
                <li class="footer__block_third__docs__item">About Us</li>
              </a>
              <a href="#">
                <li class="footer__block_third__docs__item">Sign Up</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <img src={FooterPng} alt="error" class="footer__img" />
    </footer>
  );
};

export default Footer;

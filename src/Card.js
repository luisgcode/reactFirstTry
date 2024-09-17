import "./Card.css";

import UserPicture from "./images/hero.jpg";
import FaceIcon from "./images/f-icon.png";
import InstIcon from "./images/i-icon.png";
import TwitIcon from "./images/t-icon.png";
import GitIcon from "./images/g-icon.png";

function UserInfo() {
  return (
    <span>
      <h1 className="userName">Luis Guaiquirian</h1>
      <h2 className="userPosition">Frontend Developer</h2>
      <small className="userWeb">www.luisgcode.com</small>
    </span>
  );
}

function UserBtns() {
  return (
    <div className="btns">
      <a className="btn" href="#">
        Email
      </a>
      <a className="btn" href="#">
        LInkedin
      </a>
    </div>
  );
}

function UserDesc() {
  return (
    <div className="userDescription">
      <h3>About</h3>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
      <br />
      <h3>Interests</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}

function UserSocial() {
  return (
    <div className="SocialBackground">
      <ul className="social-icons">
        <li>
          <img src={FaceIcon} alt="social_icon" />
        </li>
        <li>
          <img src={InstIcon} alt="social_icon" />
        </li>
        <li>
          <img src={TwitIcon} alt="social_icon" />
        </li>
        <li>
          <img src={GitIcon} alt="social_icon" />
        </li>
      </ul>
    </div>
  );
}

function Card() {
  return (
    <div className="container">
      <img src={UserPicture} alt="My_profile_photo" />
      <UserInfo />
      <UserBtns />
      <UserDesc />
      <UserSocial />
    </div>
  );
}

export default Card;

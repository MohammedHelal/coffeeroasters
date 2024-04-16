import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-footer.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="logo" src={logo} alt="coffee roasters logo" />
      </Link>
      <ul className="footer-nav">
        <li className="nav-link">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="nav-link">
          <Link to="/subscribe">CREATE YOUR PLAN</Link>
        </li>
      </ul>
      <ul className="media-nav">
        <li className="nav-link">
          <img
            className="footer-media-link"
            src={facebook}
            alt="social media icon"
          />
        </li>
        <li className="nav-link">
          <img
            className="footer-media-link"
            src={instagram}
            alt="social media icon"
          />
        </li>
        <li className="nav-link">
          <img
            className="footer-media-link"
            src={twitter}
            alt="social media icon"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

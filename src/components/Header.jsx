import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import logo from "../assets/shared/desktop/logo.svg";
import PropTypes from "prop-types";

function Header({ screenSize }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="coffee roasters logo" />
      </Link>
      {screenSize <= 768 && (
        <img
          src={mobileMenuOpen ? close : hamburger}
          onClick={() => setMobileMenuOpen((prevState) => !prevState)}
        />
      )}
      <ul
        className="header-nav"
        style={{
          display: `${
            screenSize <= 768 && !mobileMenuOpen
              ? "none"
              : screenSize <= 768 && mobileMenuOpen
              ? "block"
              : "flex"
          }`,
        }}
      >
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
    </header>
  );
}

Header.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Header;

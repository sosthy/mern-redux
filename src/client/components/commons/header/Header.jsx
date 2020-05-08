import React from "react";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = ({ t, changeLanguage, langKey }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        DEMO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/" activeClassName="active" className="nav-link">
              {t("acceuil")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" activeClassName="active" className="nav-link">
              {t("users")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/roles" activeClassName="active" className="nav-link">
              {t("roles")}
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLang"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {t(langKey === "fr" ? "francais" : "anglais")}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLang"
            >
              <a
                className={
                  "dropdown-item " + (langKey === "fr" ? "active" : "")
                }
                href="#"
                onClick={() => changeLanguage("fr")}
              >
                {t("francais")}
              </a>
              <a
                className={
                  "dropdown-item " + (langKey === "en" ? "active" : "")
                }
                href="#"
                onClick={() => changeLanguage("en")}
              >
                {t("anglais")}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  langKey: PropTypes.string.isRequired,
};

export default withTranslation()(Header);

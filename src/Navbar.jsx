import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient "
        style={{
          height: "70px",
          zIndex: "999",
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className="header__image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QKsfgSJU4GsPHeGGHNag7hfQZ_1F4WcvLg&usqp=CAU"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ml-auto mb-2 mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item active">
                <Link
                  className="nav-link navbar__link"
                  to="Home"
                  duration={1000}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link navbar__link"
                  to="Service"
                  duration={1000}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link navbar__link"
                  to="About"
                  duration={1000}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClassName="menu_active"
                  className="nav-link navbar__link"
                  to="contact"
                  duration={1000}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

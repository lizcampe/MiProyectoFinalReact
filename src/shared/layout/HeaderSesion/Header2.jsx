import React from "react";
// Components
import Logo from "../Logo/Logo";
import Profile from "../../media/Profile.jpg";
import searchIcon from "../../media/searchIcon.png";
import imgtor from "../../media/imgtor.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import alarma from "../../media/alarma.png";
import "./Header2.css";

const Header2 = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="form-inline" id="image1">
      <Logo />
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" />

        <li className="nav-item">
          <a className="nav-link" href="#">
            {" "}
            <img className="help" src={imgtor} onClick="/" />
          </a>
        </li>

        <li className="input-group mb-3">
          <span>
            {" "}
            <img src={searchIcon} className="help" />
            <input
              type="text"
              className="Search-Container2"
              placeholder="   Búsqueda"
            />{" "}
          </span>
        </li>
      </ul>
    </div>
    <form className="form-inline">
      <ul>
        {" "}
        <Button id="Search" className="Submit" value="Submit a photo">
          {" "}
          Sube una foto{" "}
        </Button>{" "}
      </ul>

      <ul>
        {" "}
        <img className="alarma" src={alarma} />
      </ul>
      <ul>
        {" "}
        <Col xs={6} md={4}>
          {" "}
          <img src={Profile} className="Profile-Image" />
        </Col>
      </ul>
    </form>
  </nav>
);

export default Header2;

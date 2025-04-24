import React from "react";
import "./header.css";
import Logo from "../imgs/logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <div class="logo">
            <img src={Logo} alt="Logo fluflu pet" />
          </div>
          <div class="menu-bar">
            <ul class="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Petfit</a>
              </li>
              <li>
                <a href="#">Clinicas</a>
              </li>
              <li>
                <a href="#"> Primeiros socorros</a>
              </li>
            </ul>
          </div>
          <div class="buttons">
            <div class="user-icon">
              <i class="fa-solid fa-user"></i>{" "}
              <strong>
                <p>Victor é feliz</p>
              </strong>
            </div>
            <div>
              {" "}
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

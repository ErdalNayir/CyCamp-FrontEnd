import React, { Component } from "react";
import "../styles/headerstyle.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Searchbar from "../helpers/searchbar";

export default function Header(props) {
  const navigate = useNavigate();

  if (props.value == 1) {
    return (
      <header className="header ">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logoAndSearch">
            <h1 className="logo">
              {/* <img
                src={require("../assets/images/siteLogo.png")}
                style={{ height: "200px" }}
              /> */}
              <a href="#">CyCamp</a>
            </h1>
            <Searchbar></Searchbar>
          </div>

          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <nav className="navbar">
            <ul>
              <li>
                <a
                  onClick={() => {
                    navigate("/userprofile");
                  }}
                >
                  <Avatar
                    alt="Profile image"
                    src={"https://avatars.githubusercontent.com/u/76615367?v=4"}
                    sx={{ width: 30, height: 30 }}
                  />
                  <p className="headerUserName">erdalnayir</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header ">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logoAndSearch">
            <h1 className="logo">
              {/* <img
                src={require("../assets/images/siteLogo.png")}
                style={{ height: "200px" }}
              /> */}
              <a href="#">CyCamp</a>
            </h1>
            <Searchbar></Searchbar>
          </div>

          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <nav className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link "
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Giriş yap
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

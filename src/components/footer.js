import React, { Component } from "react";

import IconButton from "@mui/material/IconButton";

import "../styles/footerstyle.css";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4 className="fs-1 mb-3">CyCamp</h4>
              <h1 className="list-unstyled fs-6">
                <IconButton
                  className="updateButton"
                  aria-label="Update Profile"
                  sx={{
                    color: "gray",
                    "&:hover, &.Mui-focusVisible": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  <Facebook color="blue" />
                </IconButton>
                <IconButton
                  className="updateButton"
                  aria-label="Update Profile"
                  sx={{
                    color: "gray",
                    "&:hover, &.Mui-focusVisible": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  <YouTube color="blue" />
                </IconButton>
                <IconButton
                  className="updateButton"
                  aria-label="Update Profile"
                  sx={{
                    color: "gray",
                    "&:hover, &.Mui-focusVisible": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  <Instagram color="blue" />
                </IconButton>
                <IconButton
                  className="updateButton"
                  aria-label="Update Profile"
                  sx={{
                    color: "gray",
                    "&:hover, &.Mui-focusVisible": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  <Twitter color="blue" />
                </IconButton>
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Yararlı Linkler</h4>
              <ul className="list-unstyled">
                <li>Erdal Nayir</li>
                <li>Uğur</li>
                <li>Baran</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Yararlı Linkler</h4>
              <ul className="list-unstyled">
                <li>Berat</li>
                <li>Efe</li>
                <li>Fatih</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Nature App | Bütün Hakları
              Saklıdır
            </p>
          </div>
        </div>
      </div>
    );
  }
}

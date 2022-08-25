import React from "react";
import "../styles/filterbarstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Filterbar() {
  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="text"
        name=""
        placeholder="Aradığın yeri hemen bul"
      />
      <a className="search-btn" href="#">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
    </div>
  );
}

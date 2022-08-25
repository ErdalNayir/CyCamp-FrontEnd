import React from "react";
import "../styles/searchbarstyle.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  return (
    <div className="off">
      <i className="icon">
        <SearchOutlinedIcon></SearchOutlinedIcon>
      </i>
      <input
        className="input-field"
        type="text"
        placeholder="Ara..."
        onClick={() => {
          navigate("/filterroute");
        }}
      ></input>
    </div>
  );
}

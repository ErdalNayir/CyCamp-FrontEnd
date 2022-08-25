import React, { Component, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

export default function Followbutton() {
  const [buttonKind, setButtonKind] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return <div>followbutton</div>;
}

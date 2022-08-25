import React from "react";
import "../styles/qrstyle.css";
import QRCode from "react-qr-code";

export default function QrGenerator(props) {
  return (
    <QRCode
      size={200}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={props.url}
      viewBox={`0 0 256 256`}
    />
  );
}

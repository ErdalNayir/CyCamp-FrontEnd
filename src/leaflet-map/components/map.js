import React, { Component } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import { Marker, Popup } from "react-leaflet";

import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import Geoman from "./geoman";
import "../styles/mapstyle.css";
import styles from "../styles/changeStylesOnPages.module.css";
import Layerss from "./layerss";
import "leaflet/dist/leaflet.css";
import { Polyline } from "react-leaflet";
import { Tooltip } from "react-leaflet";

import { iconPerson } from "./icon";

// const walkRouteOption = {
//   color: "#C8180A",
//   weight: 5,
//   dashArray: "0.6, 9",
//   dashOffset: "0",
// };
// const polyline = [
//   [41.028231054069906, 29.01618540287018],
//   [41.02844148957508, 29.016383886337277],
//   [41.028692392567685, 29.016646742820736],
//   [41.02884212454319, 29.01682913303375],
//   [41.02902018374658, 29.016700387001038],
//   [41.02924275707364, 29.01689350605011],
//   [41.02967576120885, 29.017269015312195],
//   [41.02982549094814, 29.017462134361264],
//   [41.02992665949817, 29.017590880393982],
//   [41.02978907023209, 29.01778399944305],
//   [41.02965148067851, 29.017934203147885],
//   [41.02948961024733, 29.017800092697144],
//   [41.02902827733528, 29.01730120182037],
//   [41.02858312847875, 29.016877412796017],
//   [41.02829985036675, 29.01658773422241],
// ];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={iconPerson}>
      <Popup>Sen burdasın</Popup>
    </Marker>
  );
}

export default function Map(props) {
  return (
    <MapContainer
      id="mapId"
      className={
        props.whichStyle == "add" ? styles.map : styles.mapRouteDetails
      }
      center={[41.02924275707364, 29.01689350605011]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {/* <Polyline pathOptions={walkRouteOption} positions={polyline}>
        <Tooltip sticky>Üsküdar yürüyüş yolu.</Tooltip>
      </Polyline> */}

      <LocationMarker />
      {props.whichStyle == "add" ? <Geoman></Geoman> : <p></p>}
      {/* <Geoman></Geoman> */}

      <Layerss></Layerss>
    </MapContainer>
  );
}

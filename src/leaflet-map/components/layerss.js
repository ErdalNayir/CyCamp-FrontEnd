import React, { Component } from "react";
import { LayersControl, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

import { iconPerson } from "./icon";
import "../styles/mapstyle.css";

const center = [40.183, 29.0725];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

//leaflet-control-layers-list

export default class Layerss extends Component {
  render() {
    return (
      <LayersControl position="bottomright">
        <LayersControl.Overlay name="<div className='my-div-id'><img src='https://i.ibb.co/SKVfJHC/camping-icon-13528.png' height=20px width=20px/>Kamp Alanları</div>">
          <Marker position={center} icon={iconPerson}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="<div className='my-div-id'><img src='https://www.kindpng.com/picc/m/41-414252_clip-art-walk-sign-clipart-clipart-man-walking.png' height=20px width=15px/>Yürüyüş Rotaları</div>">
          <Marker position={center} icon={iconPerson}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="<div className='my-div-id'><img src='https://i.ibb.co/TkGzw55/kindpng-4787754.png' height=20px width=20px/>Bisiklet Rotaları</div>">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.BaseLayer
          name="<div className='my-div-id'><img src='https://pic.onlinewebfonts.com/svg/img_466914.png' height=20px width=20px/>Harita Görüntüsü</div>"
          checked={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="<div className='my-div-id'><img src='https://upload.wikimedia.org/wikipedia/commons/2/27/FP_Satellite_icon.svg' height=20px width=20px/>Uydu Görüntüsü</div>">
          <TileLayer
            maxZoom={19}
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    );
  }
}

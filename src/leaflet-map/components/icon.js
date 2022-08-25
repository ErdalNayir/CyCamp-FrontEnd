import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: require("../assets/images/olLan.png"),
  iconRetinaUrl: require("../assets/images/olLan.png"),
  iconSize: new L.Point(20, 20),
  className: "leaflet-div-icon",
});

export { iconPerson };

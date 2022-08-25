import "../App.css";

import Map from "./components/map";
import "../leaflet-map/styles/mapstyle.css";

function MainMap(props) {
  return (
    <div className="map-container">
      <Map whichStyle={props.newStyle}></Map>
    </div>
  );
}

export default MainMap;

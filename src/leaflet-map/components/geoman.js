import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import L from "leaflet";
import polylineMeasure from "leaflet.polylinemeasure";
import geocoder from "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet.polylinemeasure/Leaflet.PolylineMeasure.css";
import opt from "./opt";

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/leaflet.markercluster-src.js";
import "leaflet-easybutton/src/easy-button.css";
import "leaflet-easybutton/src/easy-button.js";

export default function Geoman() {
  //all controls and plugins will have added to context
  const context = useLeafletContext();

  const fullscreen = L.easyButton({
    position: "topright",
    states: [
      {
        icon: '<img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Full-Screen-2-icon.png" height="20px" width="20px"  />',
        onClick: function () {
          var mapId = document.getElementById("mapId");
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            mapId.requestFullscreen();
          }
        },
        title: "Tam ekran veya normal ekran için tıklayın",
      },
    ],
  });

  var sayac = 0;
  //create plugins
  const measure = new polylineMeasure(opt);

  const markers = L.markerClusterGroup();
  const scale = L.control.scale({
    position: "bottomright",
    metric: true,
    imperial: false,
  });

  const campicon = L.icon({
    iconUrl: "https://i.ibb.co/SKVfJHC/camping-icon-13528.png",
    iconSize: [40, 40],
  });

  const coder = new geocoder({
    defaultMarkGeocode: false,
    placeholder: "Ara...",
  });

  const cycleRouteOption = {
    color: "#7A0AC8",
    weight: 6,
    dashArray: "15, 20",
    dashOffset: "0",
  };

  const walkRouteOption = {
    color: "#C8180A",
    weight: 5,
    dashArray: "0.6, 9",
    dashOffset: "0",
  };

  var pathColor = 0;
  var geoData = {};

  const actions = [
    // uses the default 'cancel' action
    "cancel",
    // creates a new action that has text, no click event
    { text: "Custom text, no click" },
    // creates a new action with text and a click event
    {
      text: "click me",
      onClick: () => {
        alert("🙋‍♂️");
      },
    },
  ];

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    //Adding plugins
    leafletContainer.addControl(measure);

    fullscreen.addTo(leafletContainer);

    coder
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        // var marker = L.marker(latlng, { icon: campicon }).addTo(
        // leafletContainer;
        // );
        leafletContainer.fitBounds(e.geocode.bbox);
      })
      .addTo(leafletContainer);

    leafletContainer.addControl(coder);

    //create cluster
    //markers.addLayer(L.marker(getRandomLatLng(leafletContainer)));

    leafletContainer.addLayer(markers);

    scale.addTo(leafletContainer);

    leafletContainer.on("enterFullscreen", function () {
      console.log("entered fullscreen");
    });

    leafletContainer.on("exitFullscreen", function () {
      console.log("exited fullscreen");
    });

    // you can also toggle fullscreen from map object

    //adding embedded controls from leaflet.js
    leafletContainer.pm.addControls({
      drawMarker: true,
      cutPolygon: false,
      drawCircle: false,
      drawCircleMarker: false,
      drawRectangle: false,
      focus: true,
      drawText: false,
      rotateMode: false,
    });

    //Custom translations
    const customTranslation = {
      tooltips: {
        placeMarker: "Nokta yerleştirmek için tıklayın",
        firstVertex: "İlk noktayı belirlemek için bir yere tıklayın",
        continueLine: "Çizime devam etmek için bir yere tıklayın",
        finishLine:
          "Çizimi bitirmek için var olan herhangi bir noktaya tıklayın",
        finishPoly: "Bitirmek için başlangıç noktasına tıklayın.",
      },
      actions: {
        finish: "Tamamla",
        cancel: "İptal",
        removeLastVertex: "Son noktayı kaldır",
      },
      buttonTitles: {
        drawMarkerButton: "Kamp noktası belirle",
        drawPolyButton: "Kamp alanı çiz",
        drawLineButton: "Rota oluştur",
        editButton: "Çizim Düzenle",
        dragButton: "Çizim Taşı",
        deleteButton: "Çizim sil",
      },
    };

    leafletContainer.pm.setLang("customName", customTranslation, "tr");

    leafletContainer.pm.setPathOptions(walkRouteOption, {
      ignoreShapes: ["Polygon"],
    });

    const actions = [
      "cancel",
      "finish",
      {
        text: "Rota değiştir",
        onClick: () => {
          if (pathColor == 0) {
            leafletContainer.pm.setPathOptions(cycleRouteOption, {
              ignoreShapes: ["Polygon"],
            });
            pathColor = 1;

            console.log(pathColor);
          } else {
            leafletContainer.pm.setPathOptions(walkRouteOption, {
              ignoreShapes: ["Polygon"],
            });
            pathColor = 0;

            console.log(pathColor);
          }
        },
      },
    ];

    leafletContainer.pm.enableDraw("Marker", {
      markerStyle: { icon: campicon },
    });
    leafletContainer.pm.disableDraw();

    leafletContainer.pm.Toolbar.changeActionsOfControl("drawPolyline", actions);

    //create polygon and polyline
    leafletContainer.on("pm:create", (e) => {
      if (e.layer && e.layer.pm) {
        const shape = e;

        // console.log(e);

        // enable editing of circle
        //shape.layer.pm.enable();

        //console.log(shape.layer.pm.getShape());

        if (shape.layer.pm.getShape() == "Polygon") {
          shape.layer.setStyle({ color: "#D36C00" });
          geoData = shape.layer.pm._layer.toGeoJSON();
        } else if (shape.layer.pm.getShape() == "Line") {
          geoData = shape.layer.pm._layer.toGeoJSON();
        } else {
          geoData = shape.layer.pm._layer.toGeoJSON();
          sayac += 1;
          if (sayac % 2 != 0) {
            markers.addLayer(L.marker(shape.layer._latlng, { icon: campicon }));
            leafletContainer.removeLayer(shape.layer);
          }
        }

        shape.layer.on("pm:edit", (e) => {
          const event = e;
          // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        });
      }
    });

    //delete polygon and polyline
    leafletContainer.on("pm:remove", (e) => {
      // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
    });

    return () => {
      //set global styles
      leafletContainer.pm.setGlobalOptions({ pmIgnore: false });
      leafletContainer.pm.applyGlobalOptions();

      //set style to marker

      leafletContainer.pm.toggleControls();
      leafletContainer.pm.removeControls();
    };
  }, []);

  return null;
}

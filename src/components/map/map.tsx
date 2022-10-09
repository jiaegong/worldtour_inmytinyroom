import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import { Url } from "url";
import ModalPortal from "../../shared/modal/modalPortal";
import Modal from "../../shared/modal/modal";
import CityDetail from "./cityDetail/cityDetail";

export default function Map() {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState("s1SRc1BGc4pnsBPc4BZl");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(
      new maplibregl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      }),
      "top-right"
    );
    // new maplibregl.Marker({ color: "#FF0000" })
    //   .setLngLat([-63.29223632812499, -18.28151823530889])
    //   .addTo(map.current);

    map.current.loadImage(
      "https://maplibre.org/maplibre-gl-js-docs/assets/custom_marker.png",
      function (error: any, image: Url) {
        if (error) throw error;
        map.current.addImage("custom-marker", image);
        // Add a GeoJSON source with 3 points.
        map.current.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [-63.29223632812499, -18.28151823530889],
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [139.7525, 35.6846],
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [103.86256465168363, 1.349478667721708],
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: [127.03202097148395, 37.517704696694345],
                },
              },
            ],
          },
        });

        // Add a symbol layer
        map.current.addLayer({
          id: "symbols",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
          },
        });
      }
    );

    map.current.on("click", "symbols", (e: any) => {
      console.info("A click event has occurred at " + e.lngLat);
      map.current.flyTo({
        center: e.features[0].geometry.coordinates,
      });
      handleModal();
    });

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    map.current.on("mouseenter", "symbols", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.current.on("mouseleave", "symbols", () => {
      map.current.getCanvas().style.cursor = "";
    });

    return () => {
      map.current.off("click", "symbols");
      map.current.off("mouseenter", "symbols");
      map.current.off("mouseleave", "symbols");
    };
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      <ModalPortal>
        {modalOn && (
          <Modal onClose={handleModal}>
            <CityDetail />
          </Modal>
        )}
      </ModalPortal>
    </div>
  );
}

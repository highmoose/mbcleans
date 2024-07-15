"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Initialize Mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoicHVsc2VuYXYiLCJhIjoiY2xvN2hrdXYwMDY1ajJqcWo1eXZ4MW1wNSJ9.DlVpXytZv3N3T-RhiwcmbQ";

export default function SimpleMap() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/pulsenav/clv2wwat500d301qz6k99844m",
      center: [-0.639, 52.275],
      zoom: 11.3,
      pitch: 55,
      attributionControl: false,
    });

    // Add GeoJSON data for the outline
    const geojson = {
      type: "Feature",
      properties: {},

      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.710921, 52.269761],
            [-0.744911, 52.277741],
            [-0.757287, 52.317717],
            [-0.731023, 52.329468],
            [-0.701154, 52.344362],
            [-0.664774, 52.341842],
            [-0.617677, 52.342583],
            [-0.608209, 52.351629],
            [-0.559899, 52.354145],
            [-0.508432, 52.336057],
            [-0.501853, 52.295212],
            [-0.551863, 52.269222],
            [-0.604786, 52.251391],
            [-0.634889, 52.23385],
            [-0.712089, 52.251242],
            [-0.710921, 52.269761],
          ],
        ],
      },
    };

    map.on("load", () => {
      map.addSource("outline", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "outline",
        type: "line",
        source: "outline",
        layout: {},
        paint: {
          "line-color": "#0080ff",
          "line-width": 4,
        },
      });

      map.addLayer({
        id: "outline-fill",
        type: "fill",
        source: "outline", // reference the data source
        layout: {},
        paint: {
          "fill-color": "#0080ff", // blue color fill
          "fill-opacity": 0.1,
        },
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="h-[500px] w-full overflow-hidden" ref={mapContainerRef} />
  );
}

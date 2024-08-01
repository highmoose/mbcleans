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
            center: [-0.7703738426639006, 52.25853952894741],
            zoom: 10.5,
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

        const geojson2 = {
            type: "Feature",
            properties: {},

            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [-0.5225590054502618, 52.257088799669475],
                        [-0.49050067325214286, 52.28286289769488],
                        [-0.4650544265085159, 52.32723769334055],
                        [-0.46287428265378594, 52.3623402834416],
                        [-0.4857402223508984, 52.39504740888816],
                        [-0.5176034618744723, 52.410560581086685],
                        [-0.5749215566032433, 52.41960316170636],
                        [-0.6353465100285405, 52.42644841344108],
                        [-0.708823290472111, 52.424473781718234],
                        [-0.7457311662413986, 52.416300251618395],
                        [-0.7692232127265584, 52.39831516866036],
                        [-0.7847227003517503, 52.37517109408702],
                        [-0.8127796214959631, 52.34293738875141],
                        [-0.8804916170109607, 52.31354430453018],
                        [-0.9602892556114853, 52.28834577238797],
                        [-0.9869290463698519, 52.25526675841823],
                        [-0.9772888811345979, 52.21239328210967],
                        [-0.9327817389110464, 52.184330512653275],
                        [-0.8536991691861715, 52.18085726146654],
                        [-0.6860366304530885, 52.20356615607221],
                        [-0.5225590054502618, 52.257088799669475],
                    ],
                ],
            },
        };

        const geojsonLabels = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        title: "Local Area",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-0.6231478218764437, 52.3049243572969],
                    },
                },
            ],
        };

        const geojsonLabels2 = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        title: "Service Area",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-0.8272121573938023, 52.25262344217916],
                    },
                },
            ],
        };

        map.on("load", () => {
            map.addSource("local", {
                type: "geojson",
                data: geojson,
            });

            // map.addLayer({
            //     id: "local",
            //     type: "line",
            //     source: "local",
            //     layout: {},
            //     paint: {
            //         "line-color": "#0080ff",
            //         "line-width": 4,
            //     },
            // });

            map.addLayer({
                id: "local-fill",
                type: "fill",
                source: "local",
                layout: {},
                paint: {
                    "fill-color": "#0080ff",
                    "fill-opacity": 0.3,
                },
            });

            map.addSource("outline2", {
                type: "geojson",
                data: geojson2,
            });
            // map.addLayer({
            //     id: "outline2",
            //     type: "line",
            //     source: "outline2",
            //     layout: {},
            //     paint: {
            //         "line-color": "#8be5ff",
            //         "line-width": 4,
            //     },
            // });

            map.addLayer({
                id: "outline2-fill",
                type: "fill",
                source: "outline2",
                layout: {},
                paint: {
                    "fill-color": "#8bc4ff",
                    "fill-opacity": 0.3,
                },
            });
            map.addSource("labels", {
                type: "geojson",
                data: geojsonLabels,
            });

            map.addSource("labels2", {
                type: "geojson",
                data: geojsonLabels2,
            });

            map.addLayer({
                id: "labels",
                type: "symbol",
                source: "labels",
                layout: {
                    "text-field": ["get", "title"],
                    "text-size": 16,
                    "text-offset": [0, 0.6],
                    "text-anchor": "top",
                    "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                },
                paint: {
                    "text-color": "#0076c6",
                },
            });

            map.addLayer({
                id: "labels2",
                type: "symbol",
                source: "labels2",
                layout: {
                    "text-field": ["get", "title"],
                    "text-size": 16,
                    "text-offset": [0, 0.6],
                    "text-anchor": "top",
                    "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                },
                paint: {
                    "text-color": "#3095d9",
                },
            });
        });

        return () => map.remove();
    }, []);

    return (
        <div className="relative w-full">
            <div className="h-[500px] overflow-hidden" ref={mapContainerRef} />
            {/* <div className="absolute left-10 top-10">
                <div className="flex mb-1 w-fit gap-x-2 bg-blue-700 px-4 py-1 rounded-full items-center">
                    <img
                        src="/icons/map-pinned.svg"
                        alt="map"
                        className="h-4"
                    />
                    <div className="text-md ">Local Area</div>
                </div>
                <div className="flex w-fit gap-x-2 bg-blue-400 px-4 py-1 rounded-full items-center">
                    <img
                        src="/icons/map-pinned.svg"
                        alt="map"
                        className="h-4"
                    />

                    <div className="text-md text-white">Service Area</div>
                </div>
            </div> */}
        </div>
    );
}

"use client";

import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { site } from "@/lib/site";
import "leaflet/dist/leaflet.css";

const pin = L.divIcon({
  className: "fuelup-marker",
  html: '<span class="fuelup-pin"><span class="fuelup-pin-dot"></span></span>',
  iconSize: [32, 42],
  iconAnchor: [16, 40],
  popupAnchor: [0, -36],
});

export default function VisitMap() {
  const position: [number, number] = [site.map.lat, site.map.lng];

  return (
    <MapContainer
      center={position}
      zoom={site.map.zoom}
      scrollWheelZoom
      zoomControl={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position} icon={pin}>
        <Popup>
          <p className="font-serif text-lg text-[#16382c]">{site.brandName}</p>
          <p className="mt-1 text-[13px] leading-5 text-[#6a645a]">{site.address}</p>
          <p className="mt-2 text-[12px] text-[#6a645a]">
            Pin is on Cummins College Road, Karvenagar.
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

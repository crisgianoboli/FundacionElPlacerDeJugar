import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const DEFAULT_LONGITUDE = -64.23866378716403;
const DEFAULT_LATITUDE = -31.403994252073012;
function MapBasic() {
  const position = [DEFAULT_LATITUDE, DEFAULT_LONGITUDE];
  return (
    <>
      <MapContainer center={position} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </>
  );
}

export default MapBasic;

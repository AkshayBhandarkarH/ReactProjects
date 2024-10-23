import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 12.97602726969219,
  lng: 77.56500309061616,
};
const zoom = 12;
const mapOptions = {
  disableDefaultUI: false,
};

function Gmap({ lat, lng, handleSearch }) {
  const [coordinates, setCoordinates] = useState({
    lat: lat,
    lng: lng,
  });

  useEffect(() => {
    setCoordinates({ lat: lat, lng: lng });
    setTimeout(() => {
      console.log(coordinates);
    }, 500);
  }, [lat, lng]);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDMlVAALBCx-2tliIzQKST8qFwIyCvIRc4",
  });

  if (loadError) {
    return <div>Error loading map</div>;
  }

  const handleMapClick = (event) => {
    const newLat = Number(event.latLng.lat());
    const newLng = Number(event.latLng.lng());

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat: newLat, lng: newLng } }, (results, status) => {
      if (status === "OK" && results[0] && typeof handleSearch === "function") {
        console.log(results.long_name);
        handleSearch(results.long_name);
      }
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates.lat ? coordinates : center}
      zoom={zoom}
      options={mapOptions}
      onClick={handleMapClick}
    >
      {coordinates.lat && coordinates.lng && <Marker position={coordinates} />}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default Gmap;

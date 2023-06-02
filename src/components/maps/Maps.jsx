import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import env from "react-dotenv";

const Map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
};
// console.log(process.env.GOOGLE_MAP_API_KEY);
const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCt4ooOFxwvigU8PpQam_g4KRwfVvAkxy4",
    // googleMapsApiKey: env.GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    // <div style={{ width: "70%", height: "400px", margin: "5%" }}>
    //   Maps
    //   <GoogleMapReact
    //     /*
    //   To oobtain the API even if its free you need to
    //   provide card details which as at 2nd Feb 2023
    //   isn't working for me. To try again, go to

    //   https://console.cloud.google.com/billing

    //   mapApiKey

    //   AIzaSyCt4ooOFxwvigU8PpQam_g4KRwfVvAkxy4

    //   */
    //     bootstrapURLKeys={{
    //       key: "AIzaSyCt4ooOFxwvigU8PpQam_g4KRwfVvAkxy4",
    //       language: "en",
    //     }}
    //     defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }}
    //     defaultZoom={11}
    //   >
    //     Locate Us
    //   </GoogleMapReact>
    // </div>
    <>{isLoaded && <Map />}</>
  );
};

export default Maps;

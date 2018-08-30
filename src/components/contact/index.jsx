import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 40.702882, lng: -73.990433 }} >
    <Marker position={{ lat: 40.702882, lng: -73.990433 }} />
  </GoogleMap>
));

const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_VAR_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='page-header'>
          <h1>Contact Us</h1>
        </div>
        <div className='maps-container'>
          <MapWithAMarker
            googleMapURL={mapsURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        
      </div>
    )
  }
}

export default Contact
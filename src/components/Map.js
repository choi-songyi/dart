import React from 'react';
import '../App.css'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import dotenv from 'dotenv';

function MapAPI(props) {

    const style = {
        width : '43%',
        height : '300px',
    }

    dotenv.config();

    return(
        <div>
            <Map 
              style = {style}
              google={props.google}
              zoom={17}
              initialCenter={{ lat: 51.51398, lng: -0.09837}}
            >
              <Marker position={{ lat: 51.51398, lng: -0.09837}}/>  
            </Map>
            <p>adress</p>
        </div>
    )
}
 
  export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(MapAPI);
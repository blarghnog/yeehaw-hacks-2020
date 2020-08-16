import React, { useState, useEffect } from 'react';
import './App.css'
import Location from "./Components/Location/Location";
import LocationPin from "./Components/LocationPin/LocationPin";
import LocationList from "./Components/LocationList/LocationList";
import Radius from "./Components/Radius/Radius";
import GoogleMap from 'google-map-react';
import apiKey from './apiKey';

function App() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('api/cowboyQuery')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPlaces(data.results);
        })
        .catch(error => console.log(error))
    }, []);

    const distanceToMouse = (markerPos, mousePos) => {
        const x = markerPos.x;
        const y = markerPos.y
        return (Math.sqrt(Math.pow((x - mousePos.x - 20), 2) + (Math.pow((y - mousePos.y) - 30, 2))));
      };

    const location = {
        address: "Springfield, Virginia.",
        lat: 38.7767257,
        lng: -77.2117384
    };

    return(
        <div className = "bodySection">
            <div className = "top">
                <div className = "title">Wild West Locater!</div>
                <div>
                    <Location 
                        places = {places}
                    />
                    <Radius />
                </div>
            </div>
            <div className = "bottom">
                <LocationList
                    places = {places}
                />
                <div 
                    className = "map"
                    style = {{ height: "90vh", width: "75%" }}>
                    <GoogleMap
                        bootstrapURLKeys = {{ key: apiKey }}
                        center = {location}
                        zoom = {10}
                        hoverDistance = {20}
                        distanceToMouse = {distanceToMouse}
                    >
                        {places.map((location, index) => (
                                <LocationPin 
                                    display = { location.name } 
                                    lat = { location.geometry.location.lat }
                                    lng = { location.geometry.location.lng }
                                />
                            ))}
                    </GoogleMap>
                </div>
            </div>
        </div>
    );
}
export default App;

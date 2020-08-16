import React, { useState, useEffect } from 'react';
import './App.css';
import Location from "./Components/Location/Location";
import LocationList from "./Components/LocationList/LocationList";
import Radius from "./Components/Radius/Radius";
import StateSelect from './Components/StateSelect/StateSelect';
import LocationPin from "./Components/LocationPin/LocationPin";
import Map from 'google-map-react';
import apiKey from './apiKey';


function App() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchData("cowboyQuery")
    }, []);

    const fetchData = query => {
        fetch(`api/${query}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(element => {
                element.active = false;
            });
            setPlaces(data.results);
            console.log("chill")
        })
        .catch(error => console.log(error))
    }

    const invertActive = (index, bool) => {
        let updatedPlaces = [...places];
        updatedPlaces[index].active = bool
        setPlaces(updatedPlaces);
    }

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
                    invertActive = {invertActive}
                />
                <div 
                    className = "map"
                    style = {{ height: "75vh", width: "75%" }}>
                    <Map
                        bootstrapURLKeys = {{ key: apiKey }}
                        center = {location}
                        zoom = {10}
                        hoverDistance = {20}
                        distanceToMouse = {distanceToMouse}
                    >
                        {places.map((location, index) => (
                                <LocationPin 
                                    key = {index}
                                    lat = {location.geometry.location.lat}
                                    lng = {location.geometry.location.lng}
                                    location = {location}
                                />
                            ))}
                    </Map>
                </div>
            </div>
        </div>
    );
}
export default App;

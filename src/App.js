import React from 'react';
import Location from "./Components/Location.js";
import LocationPin from "./Components/LocationPin/LocationPin";
import GoogleMap from 'google-map-react';

function App() {
    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 37.42216,
        lng: -122.08427,
    };
    
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=')
        .then(response => response.json())
        .then(data => console.log(data));

    return(
        <div>
            <Location />
            <div style={{ height: "90vh", width: "100%"}}>
                <GoogleMap
                    
                    center = {location}
                    zoom = {11}
                >
                    <LocationPin
                        address = {location.address}
                        lat = {location.lat}
                        lng = {location.lng}
                    />
                </GoogleMap>
            </div>
        </div>
    );
}
export default App;

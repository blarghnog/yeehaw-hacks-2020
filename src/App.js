import React from 'react';
import GoogleMap from 'google-map-react';

function App() {
    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 37.42216,
        lng: -122.08427,
    };

    return(
        <div style={{ height: "100vh", width: "100%"}}>
            <GoogleMap
                center = {location}
                zoom = {11}
            >
                <Test
                    lat = {location.lat}
                    lng = {location.lng}
                ></Test>
            </GoogleMap>
        </div>
    );
}
export default App;

function Test() {
    return(
        <p>poop</p>
    )
}
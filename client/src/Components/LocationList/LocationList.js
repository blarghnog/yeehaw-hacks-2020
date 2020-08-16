import React from 'react';
import "./LocationList.css";
import LocationItem from '../LocationItem/LocationItem';

export default function LocationList({ places, invertActive }) {

    return(
        <div className = "list">
            {places.map((location, index) =>(
                <LocationItem 
                    location = {location}
                    invertActive = {invertActive}
                    index = {index}
                    key = {index}
                />
            ))}
        </div>
    )
}
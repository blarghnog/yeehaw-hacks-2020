import React from 'react';
import "./LocationItem.css";

export default function LocationItem({ location, invertActive, index }) {

    return(
        <div
            className = "locationItem" 
            onClick = {() => invertActive(index, !location.active)}
            key = {index}
            >
            <h5>{location.name}</h5>
        </div>
    )
}
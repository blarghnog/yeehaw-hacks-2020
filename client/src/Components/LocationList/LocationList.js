import React from 'react';
import "./LocationList.css";

export default function LocationList({ places }) {
    return(
        <div className = "list">
            {places.map((location, index) =>(
                <div>
                    {location.name}
                </div>
            ))}
        </div>
    )
}
import React from 'react';
import "./Radius.css"

function Radius() {
    return (
        
        <select className="selectRadius" id="radius">
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="15">15km</option>
            <option value="20">20km</option>
        </select>
       
    )
}

export default Radius;
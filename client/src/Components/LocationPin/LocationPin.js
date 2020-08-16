import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './LocationPin.css';

function LocationPin({ $hover, location, invertActive, index, places }) {

    const textStyle = {
        display:  location.active || $hover? 'block' : 'none',
    }

    return(
        <div className = "pin">
            <Icon
                className = "pinIcon"
                style = {{}}
                icon = {locationIcon} 
            />
            <div 
                className = "pinText" 
                style = {textStyle}
            >
                {location.name}
            </div>
        </div>
    );
}
export default LocationPin;
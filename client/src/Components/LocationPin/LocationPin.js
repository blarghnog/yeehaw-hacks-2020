import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './LocationPin.css';

function LocationPin({ display, $hover }) {

    const textStyle = {
        display: $hover ? 'block' : 'none',
    }
    return(
        <div className = "pin">
            <Icon
                className = "pinIcon"
                style = {{}}
                icon = {locationIcon} 
            />
            <div className = "pinText" style = {textStyle}>{display}</div>
        </div>
    );
}
export default LocationPin;
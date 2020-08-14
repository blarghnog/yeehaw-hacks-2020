import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './LocationPin.css';

function LocationPin({ address }) {
    return(
        <div className = "pin">
            <Icon
                className = "pinIcon"
                icon = {locationIcon} 
            />
            <p className = "pinAddress">{address}</p>
        </div>
    );
}
export default LocationPin;
import React from 'react';
import "./Radius.css"

function Radius({ query, setQuery }) {
    
    return (
        
        <select 
            className="selectRadius" 
            value = {query.radius}
            onChange = {(e) => {
                const temp = {...query}
                temp.radius = e.target.value;
                setQuery(temp);
            }}
        >
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="15">15km</option>
            <option value="20">20km</option>
        </select>
       
    )
}

export default Radius;
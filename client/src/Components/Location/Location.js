import React, {useState} from 'react';
import "./Location.css";

function Location() {
    const [searchCity, setSearchCity] = useState("");

    const handleChange = val => {
        setSearchCity(val);
    }
    
    return (
        <div className="search">
            <input
                className="cityInput"
                type="text" 
                placeholder="Search City..."
                value={searchCity} 
                onChange={(e) => handleChange(e.target.value)} 
            /> 
            <button className="searchButton" type="submit">Search</button>
        </div>
    )
}
export default Location;
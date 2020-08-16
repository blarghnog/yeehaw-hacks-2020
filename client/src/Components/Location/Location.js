import React from 'react';
import "./Location.css";

function Location({ query, setQuery }) {
    

    const handleChange = val => {
        const temp = {...query}
        temp.city = val;
        setQuery(temp);
    }
    
    return (
        <div className="search">
            <input
                className="cityInput"
                type="text" 
                placeholder="Search City..."
                value={query.city} 
                onChange={(e) => handleChange(e.target.value)} 
            /> 
        </div>
    )
}
export default Location;
import React, {useState} from 'react';

function Location() {
    const [searchCity, setSearchCity] = useState("");

    const handleChange = val => {
        setSearchCity(val);
    }
    
    return (
        <div>
            <input 
                type="text" 
                value={searchCity} 
                onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
    )
}
export default Location;
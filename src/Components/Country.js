import React, { useState } from 'react';
import './Country.css';
import Info from './Info/Info';

const Country = (props) => {
    //console.log(props);
    const [details, setDetails] = useState('');
    const {name, population, region, flag, capital, area} = props.country;
    const handleAddCountry = props.handleAddCountry;
    
    const handleDetails= () => {
       setDetails(props.country);
    }; 

    return (
        <div className="country-main">
            <div className="country-flag">
             <img src={flag} alt="" />
            </div>

            <div className="country-info">
              <h4>{name}</h4>
              <p>Capital: {details.capital}</p>
                <p>Area: {details.area}</p>
                <p>Region: {details.region}</p>
                <p>Population: {details.population}</p>
                
                

              <button onClick={handleDetails} > show details</button>
              <button onClick={() =>handleAddCountry(props.country)} >Add country</button>
            </div>
        </div>
    );
};

export default Country;
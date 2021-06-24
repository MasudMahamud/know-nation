import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, region, flag, capital, currencies} = props.country;
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div className="country-main">
             <img src={flag} alt="" />
            <h4>{name}</h4>
           <p>Population: {population}</p>
           <p>Region: {region}</p>
           <button onClick={() =>handleAddCountry(props.country)} >Add country</button>
        </div>
    );
};

export default Country;
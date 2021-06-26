import React from 'react';
import './Population.css';
const Population = (props) => {
    const selectedCountry = props.selectedCountry;
    // let totalPopulation = 0;
    // for (let i = 0; i < selectedCountry.length; i++) {
    //     const country = selectedCountry[i];
    //     totalPopulation = totalPopulation + country.population;
        
    // }
    const totalPopulation = selectedCountry.reduce((sum, country) => sum + country.population,0)
    return (
        <div>
            <h4 className="population">Population: {totalPopulation}</h4>
        </div>
    );
};

export default Population;
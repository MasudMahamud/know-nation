import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country';
import Population from './Components/Population/Population';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => {
      setCountries(data) ;
     // console.log(data)
    })
    .catch(err => console.log(err))
  }, [])
  
 const handleAddCountry = (country) => { 
   const newCountry = [...selectedCountry, country]
   setSelectedCountry(newCountry);
  };

  return (
    <div className="App">
      <h1>Total Country: {countries.length} </h1>
      <h3>Add country : {selectedCountry.length} </h3>
      <Population selectedCountry={selectedCountry}></Population>
       <div className="show-country">
       { countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)}
       </div>
    </div>
  );
}

export default App;

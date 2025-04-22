import React,{useEffect,useState} from 'react'
import axios from 'axios'; //replacement for fetch

const App = () => {
  //1.State to store the city and weather
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);

  //2. UseEffect to fetch the weather data from api when the componenct mounts or city changes

  useEffect(() => {
    const fetchWeather = async () => {
      try{
        const apiKey="5a95ac5fb72f1cad9e9de78e5b4fc7a3";
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeather(response);
  
      }catch(error){
        console.error("Error fetching weather data:", error);
  
      }
    }

    fetchWeather();
  }
  , [city]);


  return(
    <div>
      <h1>Weather App</h1>
      <input 
      type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)} 
      />
      <div>
        <h2>Weather In{weather.name}</h2>
        <p>Temperature:{weather.main.temp}</p>
      </div>

    </div>
  )
  

};

export default App;
// import React from 'react';

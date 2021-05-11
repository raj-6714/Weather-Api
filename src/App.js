
import './App.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
function App() {
  const [weather, setweather] = useState(null);
  useEffect(() =>{
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY} `)
    .then((response) =>{
      setweather(response.data);
      const child = document.querySelector(".child");
      const parent = document.querySelector(".parent");
      
      parent.addEventListener("mousemove", (e) => {
          let xAxis = (window.innerWidth/2 - e.pageX)/20;
          let yAxis = (window.innerHeight/2 - e.pageY)/20;
          child.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` ;
      } );
      
      parent.addEventListener("mouseleave", (e) => {
          child.style.transition = "all 0.75s ease";
          child.style.transform = "rotateY(0deg) rotateX(0deg) ";
      })
      }
    );
  },[]
  );
  return (
    <div className="App">
      { weather && <div className="webpage" >
      <div className="parent">
            <div className="child">
                <div className="grandchild">
                    <div className="great1">
                        <h1 className="city">{weather.location.country},{weather.location.name} </h1>
                        <h1 className="state">{weather.location.region} </h1>
                        <h2 className="temp"> Temperature : {weather.current.temperature} C</h2>
                        <h2 className="pres">Pressure : {weather.current.pressure} </h2>
                        <h2 className="humid">Humidity : {weather.current.humidity}</h2>
                        <h2 className="timezone">Timezone : {weather.location.timezone_id} </h2>
                        <h2 className="last">Time : {weather.current.observation_time}, Visibility : {weather.current.visibility} </h2>
                    </div>
                </div>
            </div>
    </div>
      </div>  
  }
       </div>
  );
}
export default App;

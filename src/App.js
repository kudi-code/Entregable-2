import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [wData , setwData] = useState({})   

  const APIKey = "69b4ae676ed2f20e4c5c16bdbf0f5423"
  const success = pos =>{
    // console.log(pos.coords.latitude)
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`)
    .then(res => {//console.log(res)
      setwData(res.data)
    });     
  }   
  useEffect (() => {
    navigator.geolocation.getCurrentPosition(success)
  },[])

  console.log(wData)


  return (
    <div className="App" style={{backgroundImage: "image"}}>
      <Card country={wData.name + ", "+ wData.sys?.country}       
      weatherMain={wData.weather?.[0].description} 
      speed={wData.wind?.speed}
      cloud={wData.clouds?.all}
      cloudImg={`http://openweathermap.org/img/wn/${wData.weather?.[0].icon}@2x.png`}
      pressure={ wData.main?.pressure}
      temp={wData.main?.temp }  ></Card>
      {/* {isHecto === true ? "hectograms" : "grams"} */}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const Card = ({country,weatherMain,speed,cloud,cloudImg,pressure,temp}) =>{
    const[isFarenheit,setFarenheit] = useState([true, "°F", 0]) 
    const[icon,setIcon] = useState("") 

    useEffect(() => {
        convertDegrees()
        setIcon(cloudImg)
        // return convertDegrees
    } , [temp])
    const convertDegrees = () =>{
        if(isFarenheit[0] ===true){            
            setFarenheit([false,"°C", Math.round(temp-273.15) ])
        }
        else{
            setFarenheit([true,"°F", Math.round((temp-237.15)*1.8+32)])
        }
    }
    console.log(isFarenheit[2])

    return(
        <div className="weather">
            <h2>The Weather App</h2>
            <h4>{country}</h4>
            <img src={icon} alt="clouds" />
            <p>{weatherMain}</p>
            <p><b>Wind Speed:</b> {speed} m/s</p>
            <p><b>Clouds: </b>{cloud} %</p>
            <p><b>Pressure: </b>{pressure} mb</p>
            <p><b>{isNaN (isFarenheit[2]) === true ? "0" : isFarenheit[2] } {isFarenheit[1]}</b></p>
        <button onClick={convertDegrees}>Degrees °F/°C</button>

        </div>
    );
}
export default Card;
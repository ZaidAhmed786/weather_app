import React, { useEffect, useState } from 'react'
import "./WeatherCard.css"
import DateTime from './Date'
import Clock from './Time';
function WeatherCard() {

  const [city , setCity] = useState({});
  const [search , setSearch] = useState("karachi")

  useEffect(()=>{

    const fetchApi = async () =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6b8e87258b1babe237a7cb25b2fb50e0`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main)
  };

  fetchApi();


  },[search])
  return (
    <>

    
      <div className='box'>
      <div className='search_div'>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
      
      </div>
      {
        !city ? (<p>no found</p>) : (

<>
      <div className='wave -one'></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div>
      <div className="weathercon"><i className='fas fa-sun' style={{color: '#d36326'}}></i></div>
      <div className="info">
        <h2 className="location">{search}</h2>
        <div className="date"> <DateTime/> | <Clock/></div>
        <h1 className="temp">{city.temp} &deg;C </h1>

        <div className='div_min_max'>
        <div>
        <p> Min Temp {city.temp_min} |  Max Temp {city.temp_max}</p>
        </div>
        <div>
        <p> Feels Like {city.feels_like}</p>
        </div>
        </div>
          
        
       

       
      </div>
</>
        )
      }
    </div>
   
  </>
  )
}

export default WeatherCard
import React from 'react'
import "./WeatherCard.css"
import DateTime from './Date'
import Clock from './Time';
function WeatherCard() {
  return (
    <>
    <div class='box'>
      <div className='wave -one'></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div>
      <div className="weathercon"><i class='fas fa-sun' style={{color: '#d36326'}}></i></div>
      <div className="info">
        <h2 className="location">SUNNYVILLE</h2>
        <p className="date"> <DateTime/> | <Clock/></p>
        <h1 className="temp">25 &deg;C | 77 &deg;F</h1>
      </div>
    </div>
    {/* <span>Enable location to see yours! :)</span> */}
  </>
  )
}

export default WeatherCard
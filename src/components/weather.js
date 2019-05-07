import React from "react";

const Weather = props => (
    <div className="infoWeath">
        {props.city &&
        <div>
        <p>{props.city}</p>
        <p> {props.country}</p>
        <p>{props.temp}C<sup>o</sup></p>
        <p>{props.localtime}</p>
        </div>
      }
      <p className='error'>{props.error}</p>
      </div>
    );

export default Weather;

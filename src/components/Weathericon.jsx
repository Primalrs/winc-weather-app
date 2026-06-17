import React from "react";
import "./WeatherIcon.css";
export const WeatherIcon = () => {
  return (
    <>
      <img
        className="weather-icon"
        src="/weather-icons/sunny.png"
        alt="sunny weather"
      />
      <h2>It's Sunny!</h2>
    </>
  );
};

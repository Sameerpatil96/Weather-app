import React, { useState } from "react";

function Weather() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getCityWeather = () => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df8805b218019cc28ee719f8c0d9667e`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        if (response.message) {
          setError(error.message);
          setData(null);
        } else {
          setError("");
          setData(response);
        }
        console.log("Response is", response);
      });
  };
  if (loading) {
    return <h1>loading your request</h1>;
  }

  return (
    <>
      <input
        placeholder="Enter location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <br />
      <button onClick={getCityWeather}>Search</button>
      {error ? <h4 style={{ color: "red" }}>{error}</h4> : null}
      {data ? (
        <>
          <h1>Current Weather</h1>
          <div>Temperature {data.main.temp} Kelvin</div>
          <div>Pressure {data.main.Pressure}</div>
          <div> Visibility{data.main.visibility}</div>
        </>
      ) : null}
    </>
  );
}
export default Weather;

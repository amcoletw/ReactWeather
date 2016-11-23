var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Its currently {temp} degrees in {location}!</h3>
  );
}

module.exports = WeatherMessage;
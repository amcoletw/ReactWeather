var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=e269c52daf427151dd672ed9e249f519&units=imperial';
//variable that can't be altered

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //backticks allow urls to be injected and executed as a function

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        //if this fires, something went wrong
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
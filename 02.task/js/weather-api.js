'use strict';
/**
 * https://weather.tsukumijima.net/
 */
// TODO
document.addEventListener('DOMContentLoaded', () => {
  let city = '016010';
  const url = 'https://weather.tsukumijima.net/api/forecast?city=' + city;

  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const obj = JSON.parse(JSON.stringify(data));
      document.getElementById('tomorrow').textContent = obj.forecasts[1].date; //TODO
      document.getElementById('weather').textContent = obj.forecasts[1].telop; //TODO
      document.getElementById('weather-img').setAttribute('src', obj.forecasts[1].image.url);
      document.getElementById('rainy').textContent = obj.forecasts[1].chanceOfRain.T06_12;
    })
    .catch((error) => {
      console.error('fetch failed: ' + error);
    });
});

'use strict';
/**
 * https://pokeapi.co/docs/v2#pokemon-section
 *
 * API呼び出し：https://pokeapi.co/api/v2/move-learn-method/{id or name}/
 */
// TODO
document.addEventListener('DOMContentLoaded', () => {
  let city = '100';
  const url = 'https://pokeapi.co/api/v2/pokemon/' + city;

  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const obj = JSON.parse(JSON.stringify(data));
      document.getElementById('pokename').textContent = obj.name; //TODO
      // document.getElementById('weather').textContent = obj.forecasts[1].telop; //TODO
      document.getElementById('pokemon-img').setAttribute('src', obj.sprites.front_default);
      // document.getElementById('rainy').textContent = obj.forecasts[1].chanceOfRain.T06_1 2;
    })
    .catch((error) => {
      console.error('fetch failed: ' + error);
    });
});

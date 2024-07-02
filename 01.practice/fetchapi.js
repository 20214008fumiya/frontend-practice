'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare';

  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((res) => res.json())
    .then((data) => {
      const obj = JSON.parse(JSON.stringify(data));
      document.getElementById('name').textContent = obj['data']['name'];
      //TODO
      document.getElementById('age').textContent = obj['data']['age'];
    })
    .catch((error) => {
      console.error('fetch failed: ' + error);
    });
});

'use strict';
/**
 * p287 位置情報取得
 */
// // TODO

document.getElementById('geo').addEventListener('click', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var accuracy = position.coords.accuracy;

  var mapDiv = document.getElementById('map');
  mapDiv.innerHTML = 'Latitude: ' + latitude + '<br>Longitude: ' + longitude + '<br>Accuracy: ' + accuracy + ' meters';

  // You can use latitude and longitude to display the position on a map if needed
}
// function geolocation() {
//   function success(pos) {
//     const lat = pos.coords.latitude;
//     const lng = pos.coords.longitude;
//     const accuracy = pos.coords.accuracy;

//     $('#loc').text('緯度;${lat} 経度:${lng}');
//     $('#accuracy').text(accuracy);
//   }

//   function fail(error) {
//     alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
//   }
//   navigator.geolocation.getCurrentPosition(success, fail);
// }

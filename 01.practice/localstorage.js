'use strict';
// TODO　ローカルストレージからデータを取得
let data = localStorage.getItem('data');

let input_data = window.prompt('現在のデータ：' + data);
if (input_data != null) {
  // TODO　ローカルストレージにユーザ名を保存
  localStorage.setItem('data', input_data);
}
// TODO　コンテンツの書き換え
document.getElementById('data').textContent = localStorage.getItem('data');

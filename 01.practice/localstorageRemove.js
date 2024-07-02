'use strict';
function remove() {
  // ローカルストレージからデータを消す
  // TODO
  localStorage.removeItem('data');
  // コンテンツの書き換え
  document.getElementById('data').textContent = '';
}

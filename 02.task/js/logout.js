'use strict';
// TODO
function remove() {
  localStorage.removeItem('username');
  // コンテンツの書き換え
  document.getElementById('username').textContent = '';
  alert('ログアウトしました。');
}

'use strict';
// TODO　ローカルストレージからデータを取得
let uname = localStorage.getItem('username');

if (uname == null) {
  // TODO　ローカルストレージにユーザ名を保存
  let input_data = window.prompt('ユーザー名');
  if (input_data == '' || input_data == null) {
    input_data = '名無し';
  }
  uname = input_data;
}
// TODO　コンテンツの書き換え
document.getElementById('username').textContent = uname;

localStorage.setItem('username', uname);

'use strict';
// TODO
document.getElementById('send-btn').addEventListener('click', function () {
  var messageTextarea = document.getElementById('message');
  if (messageTextarea.value.trim() === '') {
    alert('メッセージは未入力です');
  } else {
    // メッセージが入力されている場合の処理はここ
  }
});

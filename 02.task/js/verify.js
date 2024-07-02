'use strict';
// TODO
document.addEventListener('DOMContentLoaded', function () {
  var deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (confirm('削除しますか？')) {
        // 削除処理をここに書く
        // alert('削除されました');
      } else {
        // キャンセル処理をここに書く
        // alert('キャンセルされました');
      }
    });
  });
});

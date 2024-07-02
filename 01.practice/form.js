'use strict';
document.getElementById('form').onsubmit = function (event) {
  // TODO
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索中...`;
};

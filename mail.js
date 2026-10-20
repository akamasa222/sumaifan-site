// メールアドレスを、読み込んだ後にだけ組み立てる(迷惑メール対策)
(function () {
  var nodes = document.querySelectorAll('[data-m]');
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var addr = atob(el.getAttribute('data-m')).split('').reverse().join('');
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    el.textContent = '';
    el.appendChild(a);
  }
  var btns = document.querySelectorAll('[data-mailto]');
  for (var j = 0; j < btns.length; j++) {
    btns[j].href = 'mailto:' + atob(btns[j].getAttribute('data-mailto')).split('').reverse().join('');
  }
})();

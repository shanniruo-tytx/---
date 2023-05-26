(function () {
  var _timer_ = null;
  var spred = ['.', '.', '.', '.', '.'];
  var start = 1;
  // 加载样式
  var fixInp = document.createElement('textarea');
  var fixSend = document.createElement('input');
  var fixStop = document.createElement('input');
  var tips1 = document.createElement('p');
  var tips2 = document.createElement('span');
  var times = document.createElement('input');
  var fixWrap = document.createElement('div');
  var outer = document.createElement('div');
  var hide = document.createElement('span');
  var show = document.createElement('span');
  var checkdiv = document.createElement('div');
  var checkTip = document.createElement('span');
  var check = document.createElement('input');
  var select = document.createElement('select'); // 添加下拉菜单
  fixSend.setAttribute('type', 'submit');
  fixSend.setAttribute('value', '发送');
  fixStop.setAttribute('type', 'submit');
  fixStop.setAttribute('value', '停止');
  times.setAttribute('type', 'number');
  check.setAttribute('type', 'checkbox');
  tips1.innerHTML = '内容:';
  tips2.innerHTML = '间隔(秒):';
  hide.innerHTML = '隐藏';
  show.innerHTML = '显示';
  checkTip.innerHTML = '防重复发言:';
  outer.style.cssText = 'position: fixed; right: 10px; bottom: 10px; display: block; width:200px;padding: 10px; background:#4CAF50;z-index: 9999999;';
  times.style.cssText = 'display: inline-block; width: 40px;';
  fixInp.style.cssText = 'display: block;width: 100%;height:62px;box-sizing: border-box;';
  tips1.style.cssText = 'margin:0;padding:0;';
  fixWrap.style.cssText = 'display: inline-block;width:100%;';
  show.style.cssText = 'position: fixed; right: 10px; bottom: 10px;display:none;padding:2px; background:#4CAF50;font-size: 12px;color: #fff; cursor: pointer;';
  hide.style.cssText = 'display:inline-block;padding:2px; background:#b22;font-size: 12px;color: #fff; cursor: pointer;';
  times.value = 10;
  fixWrap.appendChild(hide);
  fixWrap.appendChild(tips1);
  fixWrap.appendChild(fixInp);
  fixWrap.appendChild(tips2);
  fixWrap.appendChild(times);
  fixWrap.appendChild(fixSend);
  fixWrap.appendChild(fixStop);
  checkdiv.appendChild(checkTip);
  checkdiv.appendChild(check);
  fixWrap.appendChild(checkdiv);
  fixWrap.appendChild(select); // 将下拉菜单添加到容器中
  outer.appendChild(fixWrap);
  document.body.appendChild(outer);
  document.body.appendChild(show);
  
  // 常用语句数组
  var commonPhrases = [
    '爆了',
    '唉，又在炸鱼',
    '唉，又在唉',
    '棍棍粉粉的也很可爱',
    '棍哥能来首相遇天使吗'
  ];
  
  // 创建下拉菜单选项
  commonPhrases.forEach(function (phrase) {
    var option = document.createElement('option');
    option.text = phrase;
    select.appendChild(option);
  });
  
  // 发送弹幕
  function send(message, bool) {
    if (bool) {
      var s = spred.slice(0, start++);
      message += s.join('');
      if (start > spred.length) {
        start = 1;
      }
    }
    document.querySelector('.ChatSend-txt').value = message;
    document.querySelector('.ChatSend-button').click();
  }
  
  // 事件
  fixSend.addEventListener('click', function () {
    var time = parseInt(times.value);
    var message = fixInp.value;
    var bool = check.checked;
    fixSend.style.display = 'none';
    send(message);
    _timer_ = setInterval(function () {
      send(message, bool);
    }, time * 1000);
  });
  
  fixStop.addEventListener('click', function () {
    fixSend.style.display = 'inline-block';
    clearInterval(_timer_);
    _timer_ = null;
  });
  
  hide.addEventListener('click', function () {
    outer.style.display = 'none';
    show.style.display = 'inline-block';
  });
  
  show.addEventListener('click', function () {
    outer.style.display = 'block';
    show.style.display = 'none';
  });
  
  // 监听下拉菜单的变化
  select.addEventListener('change', function () {
    fixInp.value = select.value; // 将选择的常用语句添加到输入框
  });
})();

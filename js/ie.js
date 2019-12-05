var isIE = function(ver){
  var b = document.createElement('b')
  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
  return b.getElementsByTagName('i').length === 1
}

if(isIE(6)||isIE(7)||isIE(8)) { 
  
  confirm('您使用的浏览器版本过低，请升级后再来访问！(*´∀`)~♥');
  window.close();
}
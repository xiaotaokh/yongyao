Date.prototype.format = function (format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
        date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}

$('#wechat').webuiPopover({
  padding: false,
  animation: 'pop',
  trigger: 'hover',
  content: '<img class="wechat-img" src="images/sub-code.jpeg"/>',
});
$('#phone').webuiPopover({
  padding: false,
  animation: 'pop',
  trigger: 'hover',
  content: '<div class="phonenumber"><span>010-56674588</span></div>',
});

function clickFn(str) {
  $('.bottom-nav .' + str).on('click', function () {
    scrollFn($('#' + str));
  })
}
// 锚点
function scrollFn($el) {
  $('html, body').animate({
    scrollTop: $el.offset().top - 90 + "px"
  }, 500);
}
jQuery("#nav").slide({
  type: "menu", // 效果类型，针对菜单/导航而引入的参数（默认slide）
  titCell: ".nav-item", //鼠标触发对象
  targetCell: ".sub", //titCell里面包含的要显示/消失的对象
  effect: "slideDown", //targetCell下拉效果
  delayTime: 200, //效果时间
  triggerTime: 0, //鼠标延迟触发时间（默认150）
  // returnDefault: true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
});
window.onload = function () {
  // 有hash且不是咨询服务内容页面
  var isConsultServicePage = window.location.href.indexOf('consult-service');
  var hash = window.location.hash.slice(1);
  if (hash) {
    if (isConsultServicePage === -1) {

      scrollFn($('#' + hash));
    }

  }
}
window.onload = function(){
  //长度输入框自动获得焦点
  var rectangle__width = document.getElementById('rectangle__width');
  rectangle__width.focus();
  //长度输入框失去焦点
  rectangle__width.onblur = function(){
    if(rectangle__width.value == ''){
      document.getElementById('len').innerHTML = '长度不能为空！';
    }
    else if(isNaN(rectangle__width.value)){
      document.getElementById('len').innerHTML = '长度必须是数字！';
    }
    else if(rectangle__width.value<0){
      document.getElementById('len').innerHTML = '长度必须大于零！';
    }else{
      document.getElementById('len').innerHTML = '';
    }
  }
  //宽度输入框失去焦点
  var rectangle__height = document.getElementById('rectangle__height');
  rectangle__height.onblur = function(){
   if(rectangle__height.value == ''){
      document.getElementById('hei').innerHTML = '宽度不能为空！';
    }
   else if(isNaN(rectangle__height.value)){
      document.getElementById('hei').innerHTML = '宽度必须是数字！';
   }
   else if(rectangle__height.value<0){
      document.getElementById('hei').innerHTML = '宽度必须大于零！';
   }else{
      document.getElementById('hei').innerHTML = '';
   }

  }
};

//点击计算按钮
function clickFun(){
  var widVal = document.getElementById('rectangle__width').value;
  var heiVal = document.getElementById('rectangle__height').value;
  document.getElementById('rectangle__area').value = widVal * heiVal;
  document.getElementById('rectangle__cir').value = 2*parseFloat(widVal)+parseFloat(heiVal)*2;
}
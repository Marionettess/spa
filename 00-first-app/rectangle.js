var width = document.getElementById('rectangle-width');
var height = document.getElementById('rectangle-height');
var calc = document.getElementById('rectangle-calc');
var perimeter = document.getElementById('rectangle-perimeter');
var area = document.getElementById('rectangle-area');
var one = document.getElementById('one');
var two = document.getElementById('two');


function clickFun(){
  var w = width.value;
  var h = height.value;
  perimeter.value = w*2 + h*2;
  area.value = w*h;
}



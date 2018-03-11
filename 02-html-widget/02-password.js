$(function(){
  $('#btnImg').mouseover(function(){
    $('#btnImg').attr('src','images/attention.png');
    $('#password').attr('type','text');
  });

  $('#btnImg').mouseout(function(){
    $('#btnImg').attr('src','images/attention_fill.png');
    $('#password').attr('type','password');
  });
})

$function(){
  var $width = $('#rectangle-width'),
      $height = $('#rectangle-height'),
      $calc = $('#rectangle-calc'),
      btnNa = false;

  $clac.click(function(){
    if(!btnNa) return;

    var width = Number($width.val()),
        height = Number($height.val()),
        p = width*2+height*2,
        a = width*height;
    $('#rectangle-cir').val(p);
    $('#rectangle-area').val(a);
    console.log(p);
  });


};

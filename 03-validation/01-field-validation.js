$(function() {
  var $width = $('#rectangle-width'),
    $height = $('#rectangle-height'),
    $calc = $('#rectangle-calc'),
    blnValid = false;

  $calc.click(function() {
    if(!blnValid) return;

    var width = Number($width.val()),
      height = Number($height.val()),
      p = roundFractional(width * 2 + height * 2, 2),
      a = roundFractional(width * height, 2);

    $('#rectangle-p').val(p);
    $('#rectangle-a').val(a);
  });

  $width.focusout(function() {
    blnValid = validate('#rectangle-width');
  });
  
  $height.focusout(function() {
    blnValid = validate('#rectangle-height');
  });
  
  /**
   * 小数点后面保留第 n 位
   * 
   * @param x 做近似处理的数
   * @param n 小数点后第 n 位
   * @returns 近似处理后的数 
   */
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }

  /**
   * 对字段进行数据合法性校验
   *
   * @param field 字段的 id
   * @returns boolean 验证通过为 true，验证不通过为 false
   */
  function validate(field) {
    var $data = $(field),
      $message = $(field + '-validate'),
      name = $(field).attr('name');

    if($data.val() === '') {
      $message.html(name + '不能为空！');
      $data.select();
      return false;
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html(name + '必须是数值');
      $data.select();
      return false;
    }

    if(window.Number($data.val()) < 0) {
      $message.html(name + '必须大于零');
      $data.select();
      return false;
    }

    $message.html('');
    return true;
  }
});

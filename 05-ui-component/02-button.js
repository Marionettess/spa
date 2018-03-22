var timerButton = function(config){
    var $btn = $('<input id="wd-timer-button" type="button">'),
        timer,
        t = config.tLength;

    if(config.enable){
        enableBtn();
    }else{
        disableBtn();
    }
    $(config.container).append($btn);

    $btn.click(function(){
        $btn.trigger('timer-button-click');
    })
    /* $btn.click(function(){
        alert('lalala!!!')
    }) */

    function enableBtn() {
        $btn.val(config.title);
        $btn.removeAttr('disabled');
    }

    function disableBtn(){
        $btn.attr('disabled','disabled');
        $btn.val(config.title+'('+t+')');
        timer=window.setInterval(function(){
            t--;
            if(t==0){
                enableBtn();
                window.clearInterval(timer);
                return;
            }
            $btn.val(config.title+'('+t+')');
        },1000)

    }
    return $btn;
}
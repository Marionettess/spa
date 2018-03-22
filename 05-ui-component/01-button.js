$(function(){
    var $btn = $('.main input'),
        timer,
        t = 9;

    disableBtn();

    $btn.click(function(){
        alert('lalala!!!');
    })

    function enableBtn() {
        $btn.val('同意');
        $btn.removeAttr('disabled');
    }

    function disableBtn(){
        $btn.attr('disabled','disabled');
        $btn.val('同意('+t+')');
        timer=window.setInterval(function(){
            t--;
            if(t==0){
                enableBtn();
                window.clearInterval(timer);
                return;
            }
            $btn.val('同意('+t+')');
        },1000)

    }
})
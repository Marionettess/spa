jQuery (function($){
    //实例化定时器按钮

    var $btn = timerButton({
        'container': 'div.main',
        'title': '同意',
        'tLength': 9,
        'enable': false
    });

    $btn.on('timer-button-click', function(){
        alert('lalala');
    });
})
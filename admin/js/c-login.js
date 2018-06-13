var $login = (function(){
    var html = ''
            +'<div id="admin-app">'
                +'<div class="login">'
                    +'<h1>集团后台登录</h1>'
                    +'<form action="">'
                        +'<label for="">用户名:</label>'
                        +'<input type="text">'
                        +'<br>'
                        +'<label for="">密&nbsp;&nbsp;&nbsp;码:</label>'
                        +'<input type="password">'
                        +'<br>'
                        +'<label for="">验证码:</label>'
                        +'<input type="text">'
                        +'<br>'
                        +'<input type="submit">'
                    +'</form>'
                +'</div>'
            +'</div>'
    function show(config){
        $(config.container).html(html);
    }
    return {show:show};
})();
$(function(){
    var $btnAddPwd = $('#add-pwd'),
        $btnGetPwd = $('#get-pwd'),
        pwdTextboxs = [];
    
    $btnAddPwd.click(function(){
        var pwd = new PasswordBox({'container': 'div.main'});
        pwdTextboxs.push(pwd);
        $btnGetPwd.removeAttr('disabled');
    });
    
    $btnGetPwd.click(function() {
        pwdTextboxs.forEach(function(pwd) {
          alert(pwd.getPwd());
        });
    });
})
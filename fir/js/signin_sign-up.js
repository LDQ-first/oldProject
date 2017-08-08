

var check = (function(){
    function init(){
        checkses();
        $('.btn-alternative').on('mouseenter', function(){
             $('.email').off('blur');
             $('.password').off('blur');
             $('.phone').off('blur');
        });
        $('.btn-alternative').on('mouseleave', function(){
           checkses();
        });

    }

    function checkses() {
        checks($('.email'), /^\d*@[a-zA_Z0-9]*.[a-z]*$/);
        checks($('.password'), /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)[\da-zA-Z\W]{8,}$/);
        checks($('.phone'), /^0?(13|14|15|18)[0-9]{9}$/);
    }


    function checks($target, reg) {
        $target.on('blur', function(){
            checkfun($target, reg);
        });
        $target.on('input', function(){
            $target.next().text('');
            $target.next().css({
                display: 'none'
             });
        })
    }

    function checkfun($target, reg){
            if(!$target.val()) {
                 $target.next().text('不能为空');
                 $target.next().css({
                    display: 'inline-block'
                 });
                 return ;
            }
            if(!$target.val().match(reg)) {
                $target.next().text('格式错误');
                $target.next().css({
                    display: 'inline-block'
                 });
            }
        }


    return {
        init: init
    }
})()

check.init();
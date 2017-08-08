/*
    $.extend方法和$.fn.extend方法都可以用来扩展jQuery功能，
    这两个方法的本质区别:
    那就是$.extend方法是在jQuery全局对象上扩展方法，
    $.fn.extend方法是在$选择符选择的jQuery对象上扩展方法。
    所以扩展jQuery的公共方法一般用$.extend方法，定义插件一般用$.fn.extend方法。
*/

$.fn.extend({
    dragging: function(config) {
        var $this = $(this);
        var X;//
        var Y;//
        var xRand = 0;//
        var yRand = 0;//
        var father = $this.parent();

        //默认配置
        var defaults = {
            move : 'both',
            randomPosition : true ,
            hander:1
        }
        /*
            这样做的目的是为了保护包默认参数。也就是defaults里面的参数。
            做法是将一个新的空对象（{}）做为$.extend的第一个参数，
            defaults和用户传递的参数对象紧随其后，这样做的好处是所有值被合并到这个空对象上，
            保护了插件里面的默认值。
        */
        var opt = $.extend({},defaults,config);
        var movePosition = opt.move.toLowerCase();
        var random = opt.randomPosition;
        
        var hander = opt.hander;
        
        hander = hander === 1 ? $this :  $this.find(opt.hander)
        
            
        //CSS初始化
        father.css({
            position : "relative",
            overflow : "hidden"
        });
        $this.css({
            position : "absolute"
        });
        hander.css({
            cursor : "move"
        });

        var faWidth = parseInt(father.outerWidth());
        var faHeight = parseInt(father.outerHeight());
        var thisWidth = parseInt($this.outerWidth());
        var thisHeight = parseInt($this.outerHeight());
        var faBorderLWidth = parseInt(father.css('border-Left-width'));
        var faBorderRWidth = parseInt(father.css('border-right-width'));
        var faBorderTHeight = parseInt(father.css('border-top-width'));
        var faBorderBHeight = parseInt(father.css('border-bottom-width'));

        
        var isDown = false; 
        var positionX;
        var positionY;
        
        
        if(random){
            thisRandom();
        }
        function thisRandom(){ //随机函数
            $this.each(function(){
                var randY = parseInt(Math.random() * (faHeight - thisHeight));
                var randX = parseInt(Math.random() * (faWidth - thisWidth));
                switch(movePosition) {
                    case 'x': 
                        $(this).css({
                            left : randX
                        });
                        break;
                    case 'y':
                        $(this).css({
                             top : randY
                        })
                        break;
                    case 'both':
                        $(this).css({
                            top : randY,
                            left : randX
                        });
                        break;
                    default :
                        alert('move配置错误,正确值有（x, y, both）');
                        break;
                }
                
            }); 
        }
        
        hander.on( 'mousedown', function(e){
            father.children().css({
                zIndex : "0"
            });
            $this.css({
                zIndex : "1"
            });
            isDown = true;
            //鼠标初始位置
            X = e.pageX; 
            Y = e.pageY;
            //元素初始位置
            positionX = $this.position().left;
            positionY = $this.position().top;

            return false;
        });
            
        $(document).on('mouseup', function(e){
            isDown = false;
        });
            
        $(document).on('mousemove', function(e){
            //鼠标结束位置
            var xPage = e.pageX;
            var yPage = e.pageY;

            var moveX = positionX + (xPage - X);
            var moveY = positionY + (yPage - Y);

            switch(movePosition) {
                case 'x': thisXMove(); break;
                case 'y': thisYMove(); break;
                case 'both': thisAllMove(); break;
                default : alert('move配置错误,正确值有（x, y, both）'); break;
            }

            function limitX(){
                if(moveX < 0){
                    $this.css({
                        left : "0"
                    });
                }
                if(moveX > (faWidth - thisWidth - faBorderLWidth - faBorderRWidth )){
                    $this.css({
                        left : faWidth - thisWidth - faBorderLWidth - faBorderRWidth
                    });
                }
            }

            function limitY(){
                if(moveY < 0){
                    $this.css({
                        top : "0"
                    });
                }
                if(moveY > (faHeight - thisHeight - faBorderTHeight - faBorderBHeight )){
                    $this.css({
                        top : faHeight - thisHeight - faBorderTHeight - faBorderBHeight
                    });
                }
            }
            
            function thisXMove(){ //x轴移动
                if(isDown == true){
                    $this.css({
                        left : moveX
                    });
                } else {
                    return;
                }
                limitX();
            }
            
            function thisYMove(){ //y轴移动
                if(isDown === true){
                    $this.css({
                        top : moveY
                    });
                } else {
                    return;
                }
                limitY();
            }

            function thisAllMove(){ //全部移动
                if(isDown === true){
                    $this.css({
                        left : moveX,
                        top: moveY
                    });
                } else {
                    return;
                }
                limitX();
                limitY();
            }
            
        });
    }
})
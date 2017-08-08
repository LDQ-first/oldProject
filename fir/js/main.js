var fir = (function() {

    function start() {
        new Fir();
    }

    function Fir() {
        this.init();
    }

    Fir.prototype = {
        init: function() {
            var _this = this;
            this.startScroll = true;
            this.arr = ['A  Fir.im  Com\n{\n    return  "ldq"\n}'];
            this.firShowArr = ["i'm fir", 'fir.im'];
            this.startTime = 0;
            this.endTime = 0;
            this.pageCount = 0;
            this.allPage = 5;
            $("#betaAppHost").attr({
                caret: true
            })
            var time = 1200;
            var i = 0;
            var timer = setInterval(function(){
                i += time/100;
                $('.num').text( Math.ceil((i / time)*100) + '%');
                if(parseInt($('.num').text()) === 100) {
                    clearInterval(timer);
                    $('#loadingCover').find('img').hide();
                    _this.loading();
                    _this.createtext();
                }
            }, time/100);
            
            this.addScroll();
            this.clickPoint();
            this.clickThumbsup();
            this.clickNext();
            $.showHideMenu();
            /*this.showHideMenu();*/
        },

        loading: function() {
            var winw = $(window).width() + 200;
            var winh = $(window).height() + 200;
            var loading = $('#loadingCover').find('.circle');
            var plane = $("#plane");
            var w = loading.width();
            var h = loading.height();
            var timer = null;
            clearInterval(timer);
            var _this = this;

            timer = setInterval(function() {
                loading.css({
                    width: w += 20,
                    height: h += 20,
                    marginTop: -(w / 2),
                    marginLeft: -(h / 2)
                })
                if (w > winw && h > winh) {
                    clearInterval(timer);
                    $('#loadingCover').fadeOut();
                    plane.addClass('fly-in')
                    _this.startScroll = false;
                    setTimeout(function() {
                        plane.removeClass("fly-in");
                    }, 2500)
                }
            }, 16)
        },

        createtext: function(delay, s, ct, def) {
           clearInterval(this.textTimer);
            var _this = this;
            var delay = delay || 2000;
            var speed = 200;
            var code = '';
            var caret = '|';
            var s = s || this.arr;
            var ct = ct || $("#betaAppHost");
            var i = 0;
            var j = 0;
            console.log(s);
            var pre = $('<pre>');
            pre.css({
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit'
            })


            ct.append(pre);

            if (ct.attr('caret') != $("#betaAppHost").attr('caret')) {
                var cursor = $('<span class="cursor"></span>');
                ct.append(cursor);
                var firstCursor = setInterval(addCursor, 160);
                setTimeout(function() {
                    clearInterval(firstCursor)
                }, delay);
            }

            this.textTimer = setTimeout(renderWord, delay);

            function renderWord() {
                clearInterval(_this.cartTimer);
                if (ct.attr('caret') === $("#betaAppHost").attr('caret')) {
                    _this.cartTimer = setInterval(addCaret, 160);
                } else {
                    _this.cartTimer = setInterval(addCursor, 160);
                }
                if (j < s.length) {
                    console.log(j);
                    if (i < s[j].length) {
                        code += s[j][i];
                        appendWord();
                        _this.textTimer = setTimeout(renderWord, speed);
                        i++;
                    } else {
                        $(ct).find('pre').text(code.slice(0, code.length));
                        clearInterval(_this.textTimer);
                        clearInterval(_this.cartTimer);
                        j++;
                        if(j < s.length) {
                            mulitCode();
                        }
                        else {
                            _this.textTimer = setTimeout(renderWord, 0);
                        }
                    } 
                }
                else {
                    clearInterval(_this.textTimer);
                    clearInterval(_this.cartTimer);
                    $('.cursor').css({
                            opacity: 0
                    })
                    
                    if (def) {
                        def.resolve();
                    }
                    return;
                }
            }

            function appendWord() {
                $(ct).find('pre').text(code);
              //  clearTimeout(_this.textTimer);
            }

            function addCaret() {
                var text = $(ct).find('pre').text();
                $(ct).find('pre').text(text + caret);
            }

            function addCursor() {
                if ($('.cursor').css('opacity') === '0') {
                    $('.cursor').css({
                        opacity: 1
                    })
                } else if ($('.cursor').css('opacity') === '1') {
                    $('.cursor').css({
                        opacity: 0
                    })
                }
            }

            

            function mulitCode() {
                var def = $.Deferred();
                var clear = function(def){
                    _this.mulitCodeTimer = setTimeout(function(){
                        clearCode(def);
                    }, 500);
                    return def;
                };
                $.when(clear(def))
                 .done(function(){
                    _this.textTimer = setTimeout(renderWord, 500);
                })
                 .fail(function(){
                    console.log('失败了');
                    return;
                 })
            }

            function clearCode(def) {
                clearInterval(_this.cartTimer);
                if (ct.attr('caret') === $("#betaAppHost").attr('caret')) {
                    _this.cartTimer = setInterval(addCaret, 160);
                } else {
                    _this.cartTimer = setInterval(addCursor, 160);
                }

                
                if (i >= 0) { 
                    code = code.slice(0, i);
                    appendWord();
                    _this.textTimer = setTimeout(function(){
                        clearCode(def);
                    }, speed);
                    i--;            
                } else {
                   // $(ct).find('pre').text(code.slice(0, code.length));  
                    code = '';
                    i = 0;
                    def.resolve();
                } 
              
            }


        },



        addScroll: function() {
            var _this = this;
            console.log(_this);
            $(document).on("mousewheel DOMMouseScroll", function(e) {
                e.preventDefault();
                if (!_this.startScroll) {

                    _this.startTime = new Date().getTime();
                    var delta = e.originalEvent.wheelDelta ||
                        -e.originalEvent.detail;
                    if ((_this.endTime - _this.startTime) <= -1000) { //每一屏之间切换相隔 1000ms
                        //console.log(_this.endTime - _this.startTime);
                        if (delta < 0) { //向下切换【默认第一屏显示】
                            _this.pageCount++;
                            if (_this.pageCount > _this.allPage) { //上限
                                _this.pageCount = _this.allPage;
                                //_this.changeNext();
                                return;
                            }
                            _this.changeNext();
                            _this.goPageDown(_this.pageCount); //下翻
                            _this.currentPoint(_this.pageCount);
                        } else { //向上切换
                            _this.pageCount--;
                            if (_this.pageCount < 0) { //下限
                                _this.pageCount = 0;
                                //_this.changeNext();
                                return;
                            }
                            _this.changeNext();
                            _this.goPageUp(_this.pageCount); //上翻
                            _this.currentPoint(_this.pageCount);
                        }
                        _this.endTime = new Date().getTime();
                    } else {
                        return;
                    }
                }
            })
        },

        goPageDown: function(page) {
            var _this = this;
            switch (page) {
                case 1:
                    console.log(1);
                    clearInterval(_this.textTimer);
                    clearInterval(_this.cartTimer);
                    $("#navbar").addClass("color-white");
                    $(".icon-menu").addClass("color-white");
                    $("#plane").addClass("fly-out"); //飞机飞出
                    $("#betaAppHost").hide();
                    setTimeout(function() { //延时一秒，旋转出第二屏
                        $("#flipRotate").addClass("flipRotate");
                        $("#next").addClass('color-white');
                        $('.section-2').css({
                            zIndex: 10
                        })
                    }, 1000);
                    break;
                case 2:
                    console.log(2);
                    $("#flipRotate").removeClass("featuresAnimOut")
                        .addClass("featuresAnimIn");
                    $('.section-2').css({
                        zIndex: 9
                    })
                    break;
                case 3:
                    console.log(3);
                    $("#flipRotate").addClass("filpOut");
                    $("#expanded").css("opacity", 0);
                    $(".section-3").addClass("animateIn");
                    break;
                case 4:
                    console.log(4);
                    $(".section-3").removeClass("animateIn");
                    $(".section-4").addClass("reday");
                    this.usersWrapperHover();
                    this.renderbraceCcontent();
                    break;
                case 5:
                    console.log(5);
                    $(".section-5").addClass("reday");
                    $("#navbar").removeClass("color-white");
                    $("#navbar").addClass("color-blue");
                    $("#next").removeClass('color-white');
                    $("#next").addClass('color-blue');
                    $(".icon-menu").removeClass('color-white');
                    $(".icon-menu").addClass('color-blue');
                    $("#firShow").html("");
                    $('.evaluate').removeClass('appear');
                    this.showThumbsup();
                    break;
            }
        },

        showThumbsup: function() {
            
            var _this = this;
            var def = $.Deferred();
            var showText = function(def) {
                _this.thumbsupTimer = setTimeout(function() {
                    _this.createtext(1500, _this.firShowArr, $('#firShow'), def);
                    //alert("执行完毕！");
                }, 800);
                return def;
            }
            $.when(showText(def))
                .done(function() {
                    //alert("哈哈，成功了！");
                    $('.evaluate').addClass('appear');
                }).fail(function() {
                    console.log('失败了');
                    return;
                });
        },

        goPageUp: function(page) {
            var _this = this;
            switch (page) {
                case 0:
                    console.log(0);
                    $("#betaAppHost").html("");
                    $("#navbar").removeClass("color-white");
                    $("#next").removeClass('color-white');
                    $(".icon-menu").removeClass('color-white');
                    $("#plane").removeClass("fly-out").addClass("fly-in"); //飞机飞入
                    $("#flipRotate").removeClass("flipRotate");

                    setTimeout(function() { //延时一秒五，旋转出第一屏
                        $("#betaAppHost").show();
                        $("#plane").removeClass("fly-in");
                        _this.createtext(30);
                    }, 1500);
                    $('.section-2').css({
                        zIndex: 9
                    })
                    break;
                case 1:
                    console.log(1);
                    $("#flipRotate").removeClass("featuresAnimIn")
                        .addClass("featuresAnimOut");
                    break;
                case 2:
                    console.log(2);
                    $("#flipRotate").removeClass("filpOut");
                    setTimeout(function() {
                        $("#expanded").css("opacity", 1);
                        $(".section-3").removeClass("animateIn");
                    }, 800);

                    break;
                case 3:
                    console.log(3);
                    $(".section-4").removeClass("reday");
                    $(".section-3").addClass("animateIn");
                    break;
                case 4:
                    console.log(4);
                    $("#navbar").removeClass("color-blue");
                    $("#navbar").addClass("color-white");
                    $("#next").removeClass('color-blue');
                    $("#next").addClass('color-white');
                    $(".icon-menu").removeClass('color-blue');
                    $(".icon-menu").addClass('color-white');
                    $(".section-5").removeClass("reday");
                    $("#firShow").html("");
                    $('.evaluate').removeClass('appear');

                    clearInterval(_this.textTimer);
                    clearInterval(_this.cartTimer);
                    this.renderbraceCcontent();
                    break;

            }
        },



        usersWrapperHover: function() {
            $("#users-wrapper").find(".item").on("mouseover", function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(this).parents(".container").attr("class", "container");
                $(this).parents(".container").addClass($(this).data("item"));
                return false;
            });
        },

        currentPoint: function(page) {
            $('.point-ct').find('.point').each(function(idx, li) {
                $(li).removeClass('current');
                var index = $(li).attr('data-index');
                if (index == page) {
                    $(li).addClass('current');
                }
            })
        },

        clickPoint: function() {
            var _this = this;
            $('.point-ct').on('click', 'li', function() {
                $('.point').removeClass('current');
                $(this).addClass('current');
                var target = $(this).attr('data-index');
                _this.changePage(target);
            })
        },


        changePage: function(target) {
            var page = this.pageCount;
            var result = target - this.pageCount;
            if (result > 0) {
                while (this.pageCount < target) {
                    this.pageCount++;
                    this.changeNext();
                    this.goPageDown(this.pageCount)
                }
            } else if (result < 0) {
                while (this.pageCount > target) {
                    this.pageCount--;
                    this.changeNext();
                    this.goPageUp(this.pageCount);
                }
            }
        },


        changeNext: function() {
            if (this.pageCount === this.allPage) {
                $('#next').css({
                    transform: 'rotateZ(180deg)'
                })
                return;
            }
            $('#next').css({
                transform: 'rotateZ(0deg)'
            })
        },

        clickNext: function(){
            var _this = this;
            $('#next').on('click', function(){
                if(_this.pageCount + 1 <= _this.allPage) {                
                    _this.changePage(_this.pageCount + 1);           
                }
                else if(_this.pageCount - 1 >=0) {
                    _this.changePage(_this.pageCount - 1);
                }
                _this.currentPoint(_this.pageCount);
            })
        },


        clickThumbsup: function() {
            $('.icon-thumbsup').on('click', function() {
                $(this).addClass('disappear');
                $('.face').addClass('appear');
                $('.icon-comma-eye.right').addClass('rotate');
                setTimeout(function() {

                    $('.icon-comma-eye.right').removeClass('rotate');
                }, 500);
                $('.icon-mouth').addClass('rotate');
                setTimeout(function() {
                    $('.icon-mouth').removeClass('rotate');
                }, 500);
                $('.thanks').animate({
                    opacity: 1
                }, 1200);

            })
        },

        renderbraceCcontent: function() {
            $('.icon-thumbsup').removeClass('disappear');
            $('.face').removeClass('appear');
            $('.thanks').css({
                opacity: 0
            });
            $('.evaluate').removeClass('appear');
        },

        /*showHideMenu: function(){
            $('.icon-menu').on('click', function(){
                if($('.menue').hasClass('show')) {
                    $('.menue').removeClass('show');
                    $('.navbar').removeClass('show');
                }
                else {
                    $('.menue').addClass('show');
                    $('.navbar').addClass('show');
                }
            })
        }*/


    }

    return {
        start: start
    }
})();

fir.start();

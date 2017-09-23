
'use strict';

(function($){
    $.fn.Sokoban = (function(){

        var game = ( function(){

            function start($target){        
                $target.each(function(idx, node){
                    new _game($(node));
                })
            }

            function _game($target){
                this.$target = $target;
                this.pass = 0;
                this.id = localStorage.getItem('gkId') || 0;
                this.createMap(this.id);
                 

            }

            _game.prototype = {
                gkId: function() {
                    localStorage.setItem('gkId', this.id);
                },

                gk: function(){
                    $('#gk').on('keydown', $.proxy(function(e){
                        if(e.which === 13) {
                            var gkValue = $('#gk').val();
                            var gkNum = parseInt(gkValue);
                            /*if(gkValue.match( /(^[1-9]$)|(^[1-3][0-9]$)/ )){
                                this.id = gkNum - 1;
                                this.createMap(this.id);
                            }*/
                            if(gkValue.match( /^[1-9]*[1-9][0-9]*$/ ) && 
                                gkNum >=1 && gkNum <= GK.gk.length){
                                this.id = gkNum - 1;
                                this.createMap(this.id);
                            }

                            
                            
                        }
                    }, this))
                },

                btn: function() {
                    $('.pre').on('click', $.proxy(function(){
                        this.preGk();
                    }, this));

                    $('.next').on('click', $.proxy(function(){
                       this.nextGk();
                    }, this));

                    $('.retract').on('click', $.proxy(function(){
                       this.retract();
                    }, this));


                    $('.reset').on('click', $.proxy(function(){
                       this.createMap(this.id);
                    }, this));

                    $('.instruction').on('click', $.proxy(function(){
                        $('.playWay').slideToggle(400);
                    }, this));



                },
                preGk: function (){//上一关
                    if(this.id === 0) {
                        return ;
                    }
                    this.id--;
                    this.createMap(this.id);
               },

                nextGk: function (){//下一关
                    if(this.id === GK.gk.length - 1 ) {
                        return ;
                    }
                    this.id++;
                    this.createMap(this.id);
                },

                retract: function(){
                    //console.log('retract');
                    if(this.moveNum === 0) return;

                    $('.person').css({
                        left: this.x1 * 50,
                        top: this.y1 * 50
                    })

                    $('.person').data({
                        x: this.x1,
                        y: this.y1
                    })

                    if(this.moveNum != 0 && this.x2 != this.x1 || this.y2 != this.y1) {
                        this.moveNum --;
                        $('.move-nmu').html(this.moveNum);
                    }
                    
                    
                    
                    $('.box').each($.proxy(function(idx, ele){
                        if($(ele).data('idx') === this.boxIdx) {
                            $(ele).css({
                                left: this.x2 * 50,
                                top: this.y2 * 50
                            })
                        }
                    }, this));
                    this.isSuccess();

                },

            
                show: function (gkNum, moveNum){
                    var html = 
                '<div class="MesConCt">'
                    +'<div class="message">' 
                        + '<h3>第<span class="gk-num">'  
                        + this.gkNum + '</span>关 移动次数: <span class="move-nmu">' 
                        + this.moveNum + '</span></h3>' 
                        + '<input id="gk" type="text" placeholder="1~' + GK.gk.length +'"></input>'
                        + '<label for="gk" class="gk-text">关</label>'

                        + '<p class="playWay">' 
                        +   '通过方向键或awds键控制人物的移动，目标是推动所有箱子到红色区域'
                        + '</p>'
                        + '<p class="pass">' 
                        +   '恭喜你过关了'
                        + '</p>'
                    + '</div>' 
                    + '<div class="control">' 
                        + '<button class="pre">上一关</button>'
                        + '<button class="next">下一关</button>'
                        + '<button class="retract">撤销</button>'
                        + '<button class="reset">重玩本关</button>'
                        + '<button class="instruction">游戏说明</button>'
                    + '</div>'
                + '</div>';


                    this.$target.parent().append(html);
                    $('.MesConCt').css({
                        width: this.rowNum * 50 + 100
                    })
                    this.btn();
                },

                createMap: function(id){
                    this.$target.empty();
                    $('.MesConCt').remove();
                    this.$target.append('<div class="game"></div>');
                    this.nowJson = GK.gk[id];
                    this.gkNum = parseInt(id) + 1;
                    this.moveNum = 0;
                    this.rowNum = Math.sqrt(this.nowJson.length);
                    
                    console.log('createMap');

                    this.$target.css({
                        width: this.rowNum * 50 
                    })

                    $('.game').css({
                        height: this.rowNum * 50 + 20
                    })


                    $(this.nowJson).each($.proxy(function(idx, ele){    
                          

                            if(ele === 0 || ele === 3 || ele === 4) {
                                this.ele = 'activity';
                            }
                            else if(ele === 1) {
                                this.ele = 'wall';
                            }
                            else if(ele === 2) {
                                this.ele = 'destination';
                            }
                            
                           $('.game').append('<div class="pos-' 
                            + this.ele + '"></div>');
                            
                    }, this))

                    this.createBox();
                    this.createPerson();
                    this.show();
                    this.gk();
                    this.gkId();
                },

                createBox: function(){


                     $(this.nowJson).each($.proxy(function(idx, ele){    
                           if(ele === 3) {
                                /*console.log(idx);
                                console.log(this.rowNum);*/

                                var place = {};
                                place.y = parseInt(idx/this.rowNum);
                                place.x = idx - place.y * this.rowNum;

                                //console.log('x: ' + place.x + ' y: ' + place.y );

                                var box = $('<div class="box"></div>');
                                box.css({
                                    left: place.x * 50,
                                    top: place.y * 50
                                })
                                box.data({
                                    idx: idx
                                })
                                $('.game').append(box);             

                            }

                    }, this))


                },

                createPerson: function(){

                     $(this.nowJson).each($.proxy(function(idx, ele){    
                           if(ele === 4) {
                                /*console.log(idx);
                                console.log(this.rowNum);*/

                                var place = {};
                                place.y = parseInt(idx/this.rowNum);
                                place.x = idx - place.y * this.rowNum;

                               //console.log('x: ' + place.x + ' y: ' + place.y );

                                var per = $('<div class="person"></div>');
                                per.css({
                                    left: place.x * 50,
                                    top: place.y * 50,
                                    //background: "#2D6DAF url('./img/person.png') no-repeat"
                                });

                                per.data({
                                    x: place.x,
                                    y: place.y
                                });
                          
                                $('.game').append(per);
                                //解绑事件
                                $(document).off('keyup');
                                this.controlPerson(per);
                           }

                         
                    }, this))
                    
                    


                },

                controlPerson: function(per){

                    $(document).on('keyup', $.proxy(function(e){
                        switch(e.which){
                            case 65:
                            case 37: //←
                                per.css({
                                  //  backgroundPosition: '-150px 0px'
                                  transform: 'rotateZ(-90deg)'
                                });
                                this.movePerson(per, { x: -1});
                            break;
                            case 87:  
                            case 38: //↑
                                per.css({
                                  //  backgroundPosition: '0px 0px'
                                  transform: 'rotateZ(0deg)'
                                });
                                this.movePerson(per, { y: -1});

                            break;  
                            case 68:
                            case 39: //→
                                per.css({
                                 //   backgroundPosition: '-50px 0px'
                                 transform: 'rotateZ(90deg)'
                                });
                                this.movePerson(per, { x: 1});
                            break;  
                            case 83:
                            case 40: //↓
                                per.css({
                                   // backgroundPosition: '-100px 0px'
                                   transform: 'rotateZ(180deg)'
                                });
                                this.movePerson(per, { y: 1});
                            break;  

                        }


                    }, this))


                },

                movePerson: function(per, place){//人物移动
                    var stepX = place.x || 0;
                    var stepY = place.y || 0;
                    this.x1 = per.data('x');
                    this.y1 = per.data('y');
                  
        
                    if(this.nowJson[
                        this.rowNum 
                        * (per.data('y') + stepY) 
                        + (per.data('x') + stepX) 
                        ] != 1){

                        per.data({
                            x: per.data('x') + stepX,
                            y: per.data('y') + stepY
                        });

                        per.css({
                            left: per.data('x') * 50,
                            top: per.data('y') * 50
                        });



                        $('.box').each($.proxy(function(idx, ele){
                            if(this.pz(per, $(ele)) && this.nowJson[
                                this.rowNum 
                                * (per.data('y') + stepY) 
                                + (per.data('x') + stepX) 
                                ] != 1) {

                                $(ele).css({
                                    left: (per.data('x') + stepX) * 50,
                                    top: (per.data('y') + stepY) * 50
                                });

                            
                                this.boxIdx =  $(ele).data('idx');

                                $('.box').each($.proxy(function(index, elem){
                                    if( this.pz($(ele), $(elem)) && ele != elem) {
                                        //箱子前面是箱子，箱子和乌龟回退
                                        $(ele).css({
                                            left: per.data('x') * 50,
                                            top: per.data('y') * 50
                                        })

                                        per.data({
                                            x: per.data('x') - stepX,
                                            y: per.data('y') - stepY
                                        })

                                        per.css({
                                            left: per.data('x') * 50,
                                            top: per.data('y') * 50
                                        })

                                        this.boxIdx = null;
                                      
                                    }
                                }, this));



                            }
                            else if(this.pz( per, $(ele))) {
                                //箱子前面是墙，乌龟回退
                                per.data({
                                    x: per.data('x') - stepX,
                                    y: per.data('y') - stepY
                                })

                                per.css({
                                    left: per.data('x') * 50,
                                    top: per.data('y') * 50
                                })

                                this.boxIdx = null;

                            }



                        }, this));


                    }

                   this.x2 = per.data('x');
                   this.y2 = per.data('y');
                  
                    if(this.x2 != this.x1 || this.y2 != this.y1 ){
                        this.moveNum ++;
                        $('.move-nmu').html(this.moveNum);
                    }
                    

                    
                    this.isSuccess();

                },

                isSuccess: function() {
                    var num = 0;
                    $('.pos-destination').each($.proxy(function(idx, ele) {
                        $('.box').each($.proxy(function(index, elem) {
                            if(this.pz($(ele), $(elem)) ){
                                num ++;
                            }
                        }, this));
                    }, this));

                    if(num === $('.box').length) {
                        $('.pass').show(200);
                    }
                    else {
                        $('.pass').hide(200);
                    }
                    
                },

                

                pz: function(obj1, obj2){//碰撞检测
                    var T1 = obj1.offset().top;
                    var B1 = obj1.offset().top + obj1.height();
                    var L1 = obj1.offset().left;
                    var R1 = obj1.offset().left + obj1.width();
                    
                    var T2 = obj2.offset().top;
                    var B2 = obj2.offset().top + obj2.height();
                    var L2 = obj2.offset().left;
                    var R2 = obj2.offset().left + obj2.width();
                    

                    if( B1 > T2 && T1 < B2 && R1 > L2 && L1 < R2 ) {
                        return true;
                    }
                    else { 
                        return false;
                    }

                    /*if( B1 <= T2 || T1 >= B2 || R1 <= L2 || L1 >= R2 ) {
                        return false;
                    }
                    else { //碰上
                        return true;
                    }*/

                }



            }


            return {
                start: start,
            }
        })()


    
        return game;
    })()
})(jQuery)

$.fn.Sokoban.start($('.content'));

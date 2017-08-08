var canvas = (function() {

    function init(target) {
        [].slice.call(target).forEach(function(node, idx) {
            new draw(node);
        })
    }

    function draw(target) {
        this.start(target);
        var _this = this;
        this.clock();
        window.addEventListener('resize', function(){
            _this.init();
        });
        this.control();
    }

    draw.prototype = {
        start: function(target) {
            var _this = this;
            this.canvas = target;
            this.judge();
            this.init();

            this.endTime = new Date();
            console.log(this.endTime);
            this.endTime.setHours(this.endTime.getHours() + 99);
            console.log(this.endTime);
            this.ctl = 'countdown';
            this.getCurrentShowTimeSeconds();
            this.curShowTimeSeconds = this.ret;
            console.log(this.curShowTimeSeconds);

            this.balls = [];
            this.colors = ["#33B5E5", "#0099CC",
                "#AA66CC", "#9933CC", "#99CC00", "#669900",
                "#FFBB33", "#FF8800", "#FF4444", "#CC0000"
            ];


        },

        init: function(){
            console.log('init');
            var ctH = window.getComputedStyle(document.querySelector('#control')).height;
            var bdM = window.getComputedStyle(document.querySelector('body')).paddingTop;

            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight 
            - ctH.replace(/px/, '') - bdM.replace(/px/, '');
            console.log(document.body.clientHeight);
            

            this.radius = Math.round(this.canvas.width * 4 / 5 / 108 ) - 1;
            this.margin_top = Math.round(this.canvas.height / 5);
            this.margin_left = Math.round(this.canvas.width / 10);
        },

        judge: function() {
            if (this.canvas.getContext('2d')) {
                this.context = this.canvas.getContext('2d');
                console.log(this.context);
            } else {
                this.canvas.innerText = '你的浏览器不支持canvas，请更换浏览器';
            }
        },

        control: function(){
            var _this = this;
            var btns = document.querySelectorAll('button');
            document.querySelector('.countdown').addEventListener('click', function(){   
                if(this.classList.contains('active')) {
                    return;
                }
                console.log('countdown');
                _this.ctl = 'countdown';
                [].slice.call(btns).forEach(function(node, i){
                    node.classList.remove('active');
                })
               this.classList.add('active');
            })

            document.querySelector('.clock').addEventListener('click', function(){
                if(this.classList.contains('active')) {
                    return;
                }
                console.log('clock');
                _this.ctl = 'clock';
               [].slice.call(btns).forEach(function(node, i){
                    node.classList.remove('active');
                })
               this.classList.add('active');
            })

        },

        drawline: function() {
            var context = this.context;
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(700, 700);
            context.lineTo(100, 700);
            context.lineTo(102, 102);
            context.closePath();

            context.lineWidth = 5;
            context.strokeStyle = 'rgba(250, 139, 67, 1)';
            context.stroke();
            context.fillStyle = 'rgba(156, 141, 231, 1)';
            context.fill();

            context.beginPath();
            context.moveTo(200, 100);
            context.lineTo(700, 600);
            context.closePath();

            context.strokeStyle = 'rgba(250, 139, 67, 1)';
            context.stroke();
        },

        tangramArr: function(width, height) {
            this.tangram = [{
                p: [{
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: height
                }, {
                    x: width / 2,
                    y: height / 2
                }],
                color: "#69BED0"
            }, {
                p: [{
                    x: 0,
                    y: 0
                }, {
                    x: width,
                    y: 0
                }, {
                    x: width / 2,
                    y: height / 2
                }],
                color: "#CAFF68"
            }, {
                p: [{
                    x: 0,
                    y: height
                }, {
                    x: width / 2,
                    y: height
                }, {
                    x: width / 4,
                    y: height / 4 * 3
                }],
                color: "#F13C64"
            }, {
                p: [{
                    x: width / 2,
                    y: height
                }, {
                    x: width,
                    y: height
                }, {
                    x: width,
                    y: height / 2
                }],
                color: "#ECEB10"
            }, {
                p: [{
                    x: width / 2,
                    y: height
                }, {
                    x: width / 4 * 3,
                    y: height / 4 * 3
                }, {
                    x: width / 2,
                    y: height / 2
                }, {
                    x: width / 4,
                    y: height / 4 * 3
                }],
                color: "#A493BE"
            }, {
                p: [{
                    x: width / 2,
                    y: height / 2
                }, {
                    x: width / 4 * 3,
                    y: height / 4
                }, {
                    x: width / 4 * 3,
                    y: height / 4 * 3
                }],
                color: "#F78ECE"
            }, {
                p: [{
                    x: width,
                    y: 0
                }, {
                    x: width / 4 * 3,
                    y: height / 4
                }, {
                    x: width / 4 * 3,
                    y: height / 4 * 3
                }, {
                    x: width,
                    y: height / 2
                }],
                color: "#F7CA28"
            }]
        },

        drawTangram: function() {
            var width = 600,
                height = 600,
                _this = this;
            this.canvas.width = width;
            this.canvas.height = height;
            this.tangramArr(width, height);
            this.tangram.forEach(function(node, idx) {
                var route = node;
                _this.setTangram(route);
            })
        },

        setTangram: function(route) {
            var context = this.context;
            context.beginPath();
            context.moveTo(route.p[0].x, route.p[0].y);
            route.p.forEach(function(node, idx) {
                var path = node;
                context.lineTo(path.x, path.y);
            })
            context.closePath();
            context.fillStyle = route.color;
            context.fill();

            context.lineWidth = 3;
            context.strokeStyle = 'rgba(250, 139, 67, 1)';
            context.stroke();
        },

        drawArc: function() {
            var context = this.context;
            context.lineWidth = 5;
            context.strokeStyle = 'rgba(250, 139, 67, 1)';
            /*context.arc(300, 300, 200, 0, 0.5*Math.PI, true);
            context.stroke();*/
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 60, 40,
                    0, 2 * Math.PI * (i + 1) / 10);
                context.closePath();
                context.stroke();
            }
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 180, 40,
                    0, 2 * Math.PI * (i + 1) / 10);
                context.stroke();
            }
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 300, 40,
                    0, 2 * Math.PI * (i + 1) / 10, true);
                context.closePath();
                context.stroke();
            }
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 420, 40,
                    0, 2 * Math.PI * (i + 1) / 10, true);
                context.stroke();
            }
            context.fillStyle = 'rgba(250, 139, 67, 1)';
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 540, 40,
                    0, 2 * Math.PI * (i + 1) / 10);
                context.closePath();
                context.fill();
            }
            for (var i = 0; i < 10; i++) {
                context.beginPath();
                context.arc(50 + i * 100, 640, 40,
                    0, 2 * Math.PI * (i + 1) / 10);
                context.fill();
            }
        },

        getCurrentShowTimeSeconds: function() {
            var curTime = new Date();
            if(this.ctl === 'countdown') {
                this.ret = this.endTime.getTime() - curTime.getTime();
                this.ret = this.ret >= 0 ? Math.round(this.ret / 1000) : 0;
            }
            else if( this.ctl === 'clock'){
                this.ret = curTime.getHours() * 3600 
                    + curTime.getMinutes() * 60 + curTime.getSeconds();
            } 
        },

        update: function() {
            this.getCurrentShowTimeSeconds();
            this.nextShowTimeSeconds = this.ret;

            this.nextHours = parseInt(this.nextShowTimeSeconds / 3600);
            this.nextMinutes = parseInt((this.nextShowTimeSeconds - this.hours * 3600) / 60);
            this.nextSeconds = parseInt(this.nextShowTimeSeconds % 60);


            this.curHours = parseInt(this.curShowTimeSeconds / 3600);
            this.curMinutes = parseInt((this.curShowTimeSeconds - this.hours * 3600) / 60);
            this.curSeconds = parseInt(this.curShowTimeSeconds % 60);


            if (this.curShowTimeSeconds != this.nextShowTimeSeconds) {
                this.drawBalls();
                this.curShowTimeSeconds = this.nextShowTimeSeconds;
            }

            this.updateBalls();
           //console.log(this.balls.length);
        },

        drawBalls: function() {
            if (parseInt(this.curHours / 10) != parseInt(this.nextHours / 10)) {
                this.addBalls(this.margin_left,
                    this.margin_top, parseInt(this.hours / 10));
            }
            if (parseInt(this.curHours % 10) != parseInt(this.nextHours % 10)) {
                this.addBalls(this.margin_left + 15 * (this.radius + 1),
                    this.margin_top, parseInt(this.hours / 10));
            }

            if (parseInt(this.curMinutes / 10) != parseInt(this.nextMinutes / 10)) {
                this.addBalls(this.margin_left + 39 * (this.radius + 1),
                    this.margin_top, parseInt(this.minutes / 10));
            }
            if (parseInt(this.curMinutes % 10) != parseInt(this.nextMinutes % 10)) {
                this.addBalls(this.margin_left + 54 * (this.radius + 1),
                    this.margin_top, parseInt(this.minutes / 10));
            }

            if (parseInt(this.curSeconds / 10) != parseInt(this.nextSeconds / 10)) {
                this.addBalls(this.margin_left + 78 * (this.radius + 1),
                    this.margin_top, parseInt(this.seconds / 10));
            }
            if (parseInt(this.curSeconds % 10) != parseInt(this.nextSeconds % 10)) {
                this.addBalls(this.margin_left + 93 * (this.radius + 1),
                    this.margin_top, parseInt(this.seconds / 10));
            }


        },

        addBalls: function(x, y, num) {
            var _this = this;

            digit[num].forEach(function(node, i) {
                node.forEach(function(item, j) {
                    var ball = {
                        x: x + j * 2 * (_this.radius + 1) + (_this.radius + 1),
                        y: y + i * 2 * (_this.radius + 1) + (_this.radius + 1),
                        g: 1.5 * Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, //+-4
                        vy: -5,
                        color: _this.colors[Math.floor(Math.random() * _this.colors.length)]
                        /* color: 'rgb('+parseInt(Math.random()*255)+', '
                                 + parseInt(Math.random()*255)+', '
                                 + parseInt(Math.random()*255)+')'*/
                    }
                    _this.balls.push(ball);

                })
            })
        },

        updateBalls: function() {
            var _this = this;
            this.balls.forEach(function(ball, i) {
                //console.log(ball);
                ball.x += ball.vx;
                ball.y += ball.vy;
                ball.vy += ball.g;

                if (ball.y >= _this.canvas.height - _this.radius) {
                    ball.y = _this.canvas.height - _this.radius;
                    ball.vy = -ball.vy * 0.75
                }

                if (_this.balls[i].x + _this.radius < 0 
                    || _this.balls[i].x - _this.radius > _this.canvas.width
                    || _this.balls[i].y + _this.radius < 0) {
                    _this.balls.splice(i, 1);
                }

                while(_this.balls.length > 300){
                    _this.balls.pop();
                }
            })

       
        },


        clock: function(){
            var _this = this;
            setInterval(function() {
                if (!document.hidden || document.visibilityState === 'visible') {
                    document.title = '打开了'
                    _this.drawClock();
                    _this.update();
                } else if (document.hidden || document.visibilityState === 'hidden') {
                    document.title = '关闭了'
                }

            }, 50);
        },


        drawClock: function() {

            var context = this.context;
            var _this = this;

            context.clearRect(0, 0,
                this.canvas.width, this.canvas.height)

            this.hours = parseInt(this.curShowTimeSeconds / 3600);
            this.minutes = parseInt((this.curShowTimeSeconds - this.hours * 3600) / 60);
            this.seconds = parseInt(this.curShowTimeSeconds % 60);



            this.drawDight(this.margin_left,
                this.margin_top, parseInt(this.hours / 10));
            this.drawDight(this.margin_left + 15 * (this.radius + 1),
                this.margin_top, parseInt(this.hours % 10));

            this.drawDight(this.margin_left + 30 * (this.radius + 1),
                this.margin_top, 10);

            this.drawDight(this.margin_left + 39 * (this.radius + 1),
                this.margin_top, parseInt(this.minutes / 10));
            this.drawDight(this.margin_left + 54 * (this.radius + 1),
                this.margin_top, parseInt(this.minutes % 10));

            this.drawDight(this.margin_left + 69 * (this.radius + 1),
                this.margin_top, 10);

            this.drawDight(this.margin_left + 78 * (this.radius + 1),
                this.margin_top, parseInt(this.seconds / 10));
            this.drawDight(this.margin_left + 93 * (this.radius + 1),
                this.margin_top, parseInt(this.seconds % 10));


            this.balls.forEach(function(ball, i) {
                context.fillStyle = ball.color;
                context.beginPath();
                context.arc(ball.x, ball.y, _this.radius,
                    0, 2 * Math.PI);
                context.closePath();
                context.fill();

            })


        },

        drawDight: function(x, y, num) {
            var context = this.context;
            var _this = this;
            context.fillStyle = 'rgba(0, 102, 153, 1)';

            digit[num].forEach(function(node, i) {
                node.forEach(function(item, j) {
                    if (item === 1) {
                        context.beginPath();
                        context.arc(x + j * 2 * (_this.radius + 1) + (_this.radius + 1),
                            y + i * 2 * (_this.radius + 1) + (_this.radius + 1),
                            _this.radius, 0, 2 * Math.PI);
                        context.closePath();
                        context.fill();
                    }
                })
            })
        }
    }



    return {
        draw: init
    }
})();

canvas.draw(document.querySelectorAll('#canvas'));


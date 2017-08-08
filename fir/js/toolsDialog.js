$('.tools-content li:not(:first-child)').on('click', function(e){
    e.preventDefault();
    if( $('.dialog').css('display') === 'block' 
        || $('.download').css('display') === 'block') {
        return;
    }
    $('.dialog .text').text('不好意思，功能还在开发中');
    setTimeout(function(){
        $('.dialog').css({
            display: 'block'
        }) 
    },500);
})

$('.cancle').on('click', function(){
    $('.dialog').css({
        display: 'none'
    }) 
})

$('.sure').on('click', function(){
    $('.dialog .text').text('一定加班加点尽快完成');
    setTimeout(function(){
        $('.dialog').css({
            display: 'none'
        })
    }, 1500 );
})

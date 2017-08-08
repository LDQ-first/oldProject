$('.btn').on('click', function(){
    if( $('.dialog').css('display') === 'block') {
        return;
    }
    $('.dialog .text').text('你确定购买吗');
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
    $('.dialog .text').text('购买成功');
    setTimeout(function(){
        $('.dialog').css({
            display: 'none'
        })
    }, 3000 );
})




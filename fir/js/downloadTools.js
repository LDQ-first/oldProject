var timer = null;
$('.tools-content li:first-child').on('click', function(e){
    e.preventDefault();
    if( $('.download').css('display') === 'block' 
        || $('.dialog').css('display') === 'block' ) {
        return;
    }
    $('.download .text').text('确认下载吗');
    setTimeout(function(){
        $('.download').css({
            display: 'block'
        }) 
    },500);
})

$('.download .cancle').on('click', function(){
    $('.download').css({
        display: 'none'
    }) 
    $('.loader').css({
        display: 'none'
    })
    $('.loading').css({
         animation: ''
    })
    clearTimeout(timer);
})

$('.download .sure').on('click', function(){
    if( $('.loader').css('display') === 'block') {
        return;
    }
    $('.download .text').text('下载中……');
    $('.loader').css({
        display: 'block'
    })
    $('.loading').css({
         animation: 'loading 5s cubic-bezier(0.96, 0.02, 0.73, 1.4) forwards'
    })
    timer = setTimeout(function(){
        $('.download .text').text('下载完成');
        setTimeout(function(){
            $('.download').css({
                display: 'none'
            })
             $('.loader').css({
                display: 'none'
            })
        }, 3000 );
    }, 6000 );
    
})
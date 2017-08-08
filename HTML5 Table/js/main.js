$('#elements td').on('mouseenter', function(){
    $('#elements td').not(this).css({
        'z-index':  0
    })
})

$('#elements td').on('mouseleave', function(){
    $('.info').fadeOut();
})



$('#elements td').on('click', function() {
    var self = $(this).hasClass('active');
    $('.info').fadeOut();
    touchThreeD.threeD($('#elements tr'));
    $('.active').removeClass('active');
    if (!self) {
        $(this).find('.info').fadeIn();
        touchThreeD.threeOff($(this));
        $(this).addClass('active');
    }
});
$('#elements a').on('click', function(e) {
    window.open(e.target.href, 'table');
    return false;
});



touchThreeD.threeD($('#elements tr'));



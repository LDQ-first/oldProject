$.extend({
    showHideMenu: function(){
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
    }
})
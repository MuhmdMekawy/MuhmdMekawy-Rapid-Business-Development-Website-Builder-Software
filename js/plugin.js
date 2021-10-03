$(document).ready(function(){
    
    var hei = $(window).scrollTop();
    $(window).on("scroll" , function(){
        if (hei >= 1000 ){
            $('.up').fadeIn(1000).on("click" , function(){
                $(window).scrollTop(0);
            });
        }
        else{
            $('.up').fadeOut(1000);
        }
    });

    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
$(function () {
    var body = $("html, body");
    $('#video-mobile').trigger('play');
    console.log('test');
    $('.nav-click').on('click', function(e){
        e.preventDefault();
        $('.contacto').removeClass('active');
        body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           
        });
        $('.video').each(function(i){
            $(this).removeClass('playing');
            $(this).get(0).pause();
            $(this).get(0).currentTime = 0;
        });
       
        console.log('click');
        $('.skip').addClass('active');
        $('.back').addClass('active');
        var currentVideo=$(this).attr('section');
        console.log(currentVideo);
        $('.'+currentVideo).addClass('playing');
        $('.'+currentVideo).trigger('play');
        $('.skip').off('click');
        $('.skip').on('click', function(e){
            var duration = $('.'+currentVideo).get(0).duration;
            console.log(duration);
            $('.'+currentVideo).get(0).pause();
            $('.'+currentVideo).get(0).currentTime = duration;
        });
        $('.back').off('click');
        $('.back').on('click', function(e){
            body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
               
            });
            $('.contacto').removeClass('active');
            $('.skip').removeClass('active');

            $('.video').each(function(i){
                $(this).removeClass('playing');
                $(this).get(0).pause();
                $(this).get(0).currentTime = 0;
            });
            $('.back').removeClass('active');


        });

    });
    $('.nav-contacto').on('click', function(e){
        body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           
        });
        e.preventDefault();
        $('.skip').removeClass('active');
        $('.back').removeClass('active');

        $('.video').each(function(i){
            $(this).removeClass('playing');
            $(this).get(0).pause();
            $(this).get(0).currentTime = 0;
        });
        $('.contacto').addClass('active');

    });
    
});
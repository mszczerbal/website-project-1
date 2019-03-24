$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('nav ul li a').click(function() {
        let getElement = $(this).attr('href');
        if($(getElement).length) {
            let getOffset = $(getElement).offset().top;
            $('html, body').animate({
                scrollTop: getOffset - 100
            }, 500);
        }
        return false;
    });
});